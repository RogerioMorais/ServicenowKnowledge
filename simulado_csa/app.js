// Simple self-contained simulator logic
(async function(){
  const qUrl = 'questions.json';
  const questions = await fetch(qUrl).then(r=>r.json());

  // Local storage keys
  const STATS_KEY = 'csa_stats_v1';
  const LASTRUN_KEY = 'csa_lastrun_v1';

  // Load or init stats
  let stats = JSON.parse(localStorage.getItem(STATS_KEY) || '{}');
  // stats structure: { qid: { attempts: n, correct: m, lastUsedAt: timestamp } }

  function saveStats(){ localStorage.setItem(STATS_KEY, JSON.stringify(stats)); }

  function getFailureRate(q){
    const s = stats[q.id];
    if(!s || !s.attempts) return 1.0; // default 100% failure
    return 1 - (s.correct / s.attempts);
  }

  // selection algorithm
  function selectExam(num){
    const lastRun = JSON.parse(localStorage.getItem(LASTRUN_KEY) || '[]');
    const result = [];
    const pool = questions.slice();

    // 10% from last run (rounded)
    const tenPct = Math.round(num * 0.10);
    const sixtyPct = Math.round(num * 0.60);

    // pick 10% from lastRun if available
    if(lastRun.length>0 && tenPct>0){
      const candidates = lastRun.filter(id => pool.find(q=>q.id===id));
      shuffle(candidates);
      for(let i=0;i<Math.min(tenPct,candidates.length);i++){
        const qid = candidates[i];
        const idx = pool.findIndex(q=>q.id===qid);
        if(idx>=0){ result.push(pool.splice(idx,1)[0]); }
      }
    }

    // 60% from highest failure rate (tie-breaker: times used desc)
    // prepare ranking
    const ranked = pool.map(q => ({
      q,
      failure: getFailureRate(q),
      times: (stats[q.id] && stats[q.id].attempts) || 0
    })).sort((a,b)=>{
      if(b.failure!==a.failure) return b.failure - a.failure;
      return b.times - a.times; // prefer those executed more when failure ties
    });

    let need = sixtyPct;
    for(let item of ranked){
      if(need<=0) break;
      const idx = pool.findIndex(p=>p.id===item.q.id);
      if(idx>=0){ result.push(pool.splice(idx,1)[0]); need--; }
    }

    // fill remaining to reach desired number using random selection
    while(result.length < num && pool.length>0){
      const idx = Math.floor(Math.random()*pool.length);
      result.push(pool.splice(idx,1)[0]);
    }

    // final shuffle
    shuffle(result);
    // store last run ids
    localStorage.setItem(LASTRUN_KEY, JSON.stringify(result.map(q=>q.id)));
    return result;
  }

  // UI helpers
  const startBtn = document.getElementById('startBtn');
  const resumeBtn = document.getElementById('resumeBtn');
  const examEl = document.getElementById('exam');
  const questionCard = document.getElementById('questionCard');
  const timeLeftEl = document.getElementById('timeLeft');
  const currentIndexEl = document.getElementById('currentIndex');
  const totalQuestionsEl = document.getElementById('totalQuestions');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');

  let exam = null; // { questions: [], answers: [], startedAt, durationSec }
  let timerInterval = null;

  startBtn.onclick = ()=>{
    const num = parseInt(document.getElementById('numQuestions').value,10);
    const durationMin = parseInt(document.getElementById('durationMin').value,10);
    startExam(num, durationMin*60);
  };

  function startExam(num, durationSec){
    const selected = selectExam(num);
    exam = {
      questions: selected,
      answers: new Array(selected.length).fill(null),
      startedAt: Date.now(),
      durationSec
    };
    showExam();
    startTimer();
  }

  function showExam(){
    examEl.style.display = 'block';
    totalQuestionsEl.textContent = exam.questions.length;
    renderQuestion(0);
  }

  function renderQuestion(index){
    currentIndexEl.textContent = index+1;
    const q = exam.questions[index];
    questionCard.innerHTML = '';
    const card = document.createElement('div'); card.className='question';
    const qh = document.createElement('div'); qh.innerHTML = `<strong>${q.question}</strong>`;
    card.appendChild(qh);

    const opts = document.createElement('div'); opts.className='options';
    q.options.forEach((opt,i)=>{
      const b = document.createElement('div'); b.className='option'; b.textContent = opt; b.dataset.idx = i;
      if(exam.answers[index]===i) b.classList.add('selected');
      b.onclick = ()=>{
        exam.answers[index] = i;
        [...opts.children].forEach(c=>c.classList.remove('selected'));
        b.classList.add('selected');
      };
      opts.appendChild(b);
    });
    card.appendChild(opts);

    // explanation placeholder
    const expl = document.createElement('div'); expl.className='explanation'; expl.style.display='none';
    card.appendChild(expl);

    // source link
    const src = document.createElement('div'); src.className='source';
    src.style.display='none';
    card.appendChild(src);

    questionCard.appendChild(card);

    // navigation state
    prevBtn.disabled = index===0;
    nextBtn.disabled = index===exam.questions.length-1;

    // attach nav handlers
    prevBtn.onclick = ()=>{ saveCurrentAnswer(index); renderQuestion(index-1); };
    nextBtn.onclick = ()=>{ saveCurrentAnswer(index); renderQuestion(index+1); };
    submitBtn.onclick = ()=>{ if(confirm('Submit exam?')) finishExam(); };

    // immediate feedback when user selects option: mark stats
    opts.onclick = (e)=>{};
  }

  function saveCurrentAnswer(index){
    // nothing to persist per-question until submission
  }

  function startTimer(){
    if(timerInterval) clearInterval(timerInterval);
    const end = Date.now() + exam.durationSec*1000;
    timerInterval = setInterval(()=>{
      const rem = Math.max(0, Math.floor((end - Date.now())/1000));
      timeLeftEl.textContent = formatTime(rem);
      if(rem<=0){ clearInterval(timerInterval); alert('Time is up! Submitting exam.'); finishExam(); }
    }, 250);
  }

  function finishExam(){
    // grade
    const results = [];
    let correctCount = 0;
    exam.questions.forEach((q,idx)=>{
      const user = exam.answers[idx];
      const correct = q.answer;
      const ok = user===correct;
      results.push({q, user, correct, ok});
      // update stats
      const s = stats[q.id] || {attempts:0, correct:0, lastUsedAt:0};
      s.attempts = (s.attempts||0) + 1;
      if(ok) s.correct = (s.correct||0) + 1;
      s.lastUsedAt = Date.now();
      stats[q.id] = s;
      if(ok) correctCount++;
    });
    saveStats();
    // show results with explanations for wrong answers
    showResults(results, correctCount);
  }

  function toUrlPath(path){
    return '/' + path.split('/').map(segment => encodeURIComponent(segment)).join('/');
  }

  function getSourceDetails(q){
    const sourceMap = {
      q15: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'employee-center', label: 'Module 05 — Employee Center' },
      q16: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'service-portal', label: 'Module 05 — Service Portal' },
      q17: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'workflow-do-artigo', label: 'Module 05 — Workflow do Artigo' },
      q18: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'user-criteria', label: 'Module 05 — User Criteria' },
      q19: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'service-catalog', label: 'Module 05 — Service Catalog' },
      q20: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'request-management', label: 'Module 05 — Request Management' },
      q21: { path: 'Adm Fundations/basic/modulo 06.md', anchor: '1-notifications', label: 'Module 06 — Notifications' },
      q23: { path: 'Adm Fundations/basic/modulo 07.md', anchor: '4-client-scripts', label: 'Module 07 — Client Scripts' },
      q24: { path: 'Adm Fundations/basic/modulo 07.md', anchor: '5-business-rule', label: 'Module 07 — Business Rule' },
      q25: { path: 'Adm Fundations/basic/modulo 07.md', anchor: '3-data-policy', label: 'Module 07 — Data Policy' },
      q26: { path: 'Adm Fundations/basic/modulo 07.md', anchor: 'update-sets', label: 'Module 07 — Update Sets' },
      q27: { path: 'Adm Fundations/basic/modulo 07.md', anchor: 'atf', label: 'Module 07 — ATF' },
      q28: { path: 'Adm Fundations/basic/modulo 08.md', anchor: '1-shared-responsibility-model', label: 'Module 08 — Shared Responsibility Model' },
      q29: { path: 'Adm Fundations/basic/modulo 08.md', anchor: '2-encryption', label: 'Module 08 — Encryption' },
      q30: { path: 'Adm Fundations/basic/modulo 08.md', anchor: '4-logging', label: 'Module 08 — Logging' },
      q31: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'record-producers', label: 'Module 05 — Record Producers' },
      q32: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'variable-sets', label: 'Module 05 — Variable Sets' },
      q35: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'user-criteria', label: 'Module 05 — User Criteria' },
      q36: { path: 'Adm Fundations/basic/modulo 07.md', anchor: '2-ui-policy', label: 'Module 07 — UI Policy' },
      q37: { path: 'Adm Fundations/basic/modulo 07.md', anchor: '3-data-policy', label: 'Module 07 — Data Policy' },
      q38: { path: 'Adm Fundations/basic/modulo 08.md', anchor: '4-logging', label: 'Module 08 — Logging' },
      q39: { path: 'Adm Fundations/basic/modulo 07.md', anchor: 'atf', label: 'Module 07 — ATF' },
      q40: { path: 'Adm Fundations/basic/modulo 03.md', anchor: 'forms-and-lists', label: 'Module 03 — Forms, Lists and dot-walking' }
    };

    if(q && q.id && sourceMap[q.id]){
      const item = sourceMap[q.id];
      const href = `${toUrlPath(item.path)}${item.anchor ? '#' + item.anchor : ''}`;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`;
    }

    if(q && q.source){
      const raw = q.source;
      if(raw.includes(' — ')){
        const [path, label] = raw.split(' — ');
        return `<a href="${toUrlPath(path)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      }
      return `<a href="${toUrlPath(raw)}" target="_blank" rel="noopener noreferrer">${raw}</a>`;
    }

    return 'Review the study notes';
  }

  function showResults(results, correctCount){
    examEl.style.display='none';
    const res = document.getElementById('result'); res.style.display='block';
    res.innerHTML = `<h2>Result: ${correctCount}/${results.length} (${Math.round(correctCount/results.length*100)}%)</h2>`;
    const list = document.createElement('div'); list.className='results-list';
    results.forEach((r,i)=>{
      const item = document.createElement('div'); item.className='question';
      const head = document.createElement('div'); head.innerHTML = `<strong>Q${i+1}:</strong> ${r.q.question}`;
      item.appendChild(head);
      const your = document.createElement('div'); your.textContent = 'Your answer: ' + (r.user===null? 'No answer' : r.q.options[r.user]);
      item.appendChild(your);
      const correct = document.createElement('div'); correct.textContent = 'Correct: ' + r.q.options[r.correct];
      item.appendChild(correct);
      if(!r.ok){
        const expl = document.createElement('div'); expl.className='explanation'; expl.innerHTML = `<strong>Explanation:</strong> ${r.q.explanation}`;
        item.appendChild(expl);
        const src = document.createElement('div'); src.className='source'; src.innerHTML = `See details: ${getSourceDetails(r.q)}`;
        item.appendChild(src);
      }
      list.appendChild(item);
    });
    res.appendChild(list);
    // show resume button
    resumeBtn.style.display='inline-block';
  }

  resumeBtn.onclick = ()=>{ location.reload(); };

  // util: shuffle
  function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } }

  function formatTime(sec){
    const h = Math.floor(sec/3600); sec%=3600; const m = Math.floor(sec/60); const s = sec%60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // expose some debug/log
  window.csa = { questions, stats, selectExam };
})();
