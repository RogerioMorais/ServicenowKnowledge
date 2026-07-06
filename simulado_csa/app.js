// Simple self-contained simulator logic
(async function(){
  const qUrl = 'questions.json';
  const questions = await fetch(qUrl).then(r=>r.json());

  // Persistent storage helpers
  const STATS_KEY = 'csa_stats_v2';
  const LASTRUN_KEY = 'csa_lastrun_v2';
  const DB_NAME = 'csaSimulatorDb';
  const DB_VERSION = 1;
  const STORE_NAME = 'examState';

  let stats = {};
  let lastRun = [];
  // stats structure: { qid: { attempts: n, correct: m, lastUsedAt: timestamp } }

  function getModuleKey(q){
    const source = (q.source || '').toLowerCase();
    if(source.includes('modelo 01')) return 'module_01';
    if(source.includes('modulo 02')) return 'module_02';
    if(source.includes('modulo 03')) return 'module_03';
    if(source.includes('modulo 04')) return 'module_04';
    if(source.includes('modulo 05') || source.includes('mosulo 05')) return 'module_05';
    if(source.includes('modulo 06')) return 'module_06';
    if(source.includes('modulo 07')) return 'module_07';
    if(source.includes('modulo 08')) return 'module_08';
    return 'module_general';
  }

  function getModuleLabel(moduleKey){
    const labels = {
      module_01: 'Module 01',
      module_02: 'Module 02',
      module_03: 'Module 03',
      module_04: 'Module 04',
      module_05: 'Module 05',
      module_06: 'Module 06',
      module_07: 'Module 07',
      module_08: 'Module 08',
      module_general: 'General'
    };
    return labels[moduleKey] || 'General';
  }

  function getTopicWeight(q){
    const category = q.category || '';
    const highYield = ['Security','Catalog','Automation','Notifications','Testing','Encryption','Knowledge','Request Management','Scripting','Update & Transport','Data Model','Users & Access'];
    const categoryBoost = highYield.includes(category) ? 1.15 : 1.0;
    const text = `${q.question} ${q.explanation}`.toLowerCase();
    const trickyWords = ['difference','best','main','most','which statement','primarily','typical','correct','should','memorize'];
    const difficultyBoost = trickyWords.some(word => text.includes(word)) ? 1.12 : 1.0;
    return categoryBoost * difficultyBoost;
  }

  function getFailureRate(q){
    const s = stats[q.id];
    if(!s || !s.attempts) return 0.65; // default medium-high failure probability
    return 1 - (s.correct / s.attempts);
  }

  function getRevisitBoost(q){
    const s = stats[q.id];
    if(!s || !s.attempts) return 0.15;
    const accuracy = s.correct / s.attempts;
    const daysSinceLastSeen = s.lastUsedAt ? (Date.now() - s.lastUsedAt) / (1000 * 60 * 60 * 24) : 999;
    let boost = 0;
    if(accuracy > 0.8){
      boost += 0.10 + Math.min(0.20, daysSinceLastSeen / 60);
    } else if(accuracy < 0.5){
      boost += 0.35 + Math.min(0.20, (0.5 - accuracy) * 0.8);
    }
    if(daysSinceLastSeen > 14){ boost += 0.08; }
    return boost;
  }

  function scoreCandidate(q, moduleKey, mode, selectedByModule){
    const s = stats[q.id] || { attempts: 0, correct: 0, lastUsedAt: 0 };
    const attempts = s.attempts || 0;
    const accuracy = attempts ? s.correct / attempts : 0.5;
    const failureRate = getFailureRate(q);
    const recency = s.lastUsedAt ? Math.max(0.2, 1 - Math.min((Date.now() - s.lastUsedAt) / (1000 * 60 * 60 * 24 * 30), 1)) : 0.65;
    const moduleBalancePenalty = selectedByModule[moduleKey] ? 0.18 : 0;
    const easePenalty = accuracy > 0.85 ? 0.16 : 0;
    const difficultyBoost = mode === 'certification' ? 0.18 : 0;
    const weakAreaBoost = failureRate * 1.25;
    const revisitBoost = getRevisitBoost(q);
    const moduleWeight = moduleKey === 'module_05' || moduleKey === 'module_07' || moduleKey === 'module_08' ? 1.12 : 1.0;
    return (getTopicWeight(q) + weakAreaBoost + revisitBoost + difficultyBoost) * moduleWeight * (0.75 + recency * 0.45) * (1 - moduleBalancePenalty) - easePenalty + Math.random() * 0.04;
  }

  function computeModuleTargets(num){
    const moduleWeights = {
      module_01: 1.0,
      module_02: 1.1,
      module_03: 1.1,
      module_04: 1.2,
      module_05: 1.35,
      module_06: 1.2,
      module_07: 1.35,
      module_08: 1.25,
      module_general: 1.0
    };
    const modules = Object.keys(moduleWeights);
    const totalWeight = modules.reduce((sum, key) => sum + moduleWeights[key], 0);
    const targets = {};
    modules.forEach((moduleKey) => {
      targets[moduleKey] = 0;
    });

    let remaining = num;
    modules.forEach((moduleKey) => {
      const raw = num * (moduleWeights[moduleKey] / totalWeight);
      const target = Math.max(1, Math.floor(raw));
      const assigned = Math.min(target, remaining);
      targets[moduleKey] = assigned;
      remaining -= assigned;
    });

    while(remaining > 0){
      const moduleKey = modules.sort((a,b) => moduleWeights[b] - moduleWeights[a])[0];
      targets[moduleKey] += 1;
      remaining -= 1;
    }

    return targets;
  }

  function removeQuestionFromPool(pool, qid){
    const idx = pool.findIndex(q => q.id === qid);
    if(idx >= 0) pool.splice(idx, 1);
  }

  function persistState(){
    renderWeakAreas();
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
      localStorage.setItem(LASTRUN_KEY, JSON.stringify(lastRun));
    } catch (err) {
      console.warn('localStorage persistence unavailable', err);
    }

    if('indexedDB' in window){
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if(!db.objectStoreNames.contains(STORE_NAME)){
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put({ id: 'state', stats, lastRun, updatedAt: Date.now() });
      };
      request.onerror = () => console.warn('IndexedDB persistence unavailable');
    }
  }

  function loadPersistedState(){
    const legacyStats = JSON.parse(localStorage.getItem(STATS_KEY) || '{}');
    const legacyLastRun = JSON.parse(localStorage.getItem(LASTRUN_KEY) || '[]');
    if(legacyStats && Object.keys(legacyStats).length){
      stats = legacyStats;
      lastRun = legacyLastRun;
    }

    if('indexedDB' in window){
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if(!db.objectStoreNames.contains(STORE_NAME)){
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
      request.onsuccess = () => {
        const db = request.result;
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const getReq = store.get('state');
        getReq.onsuccess = () => {
          const record = getReq.result;
          if(record && record.stats){
            stats = record.stats;
            lastRun = record.lastRun || [];
          }
          renderWeakAreas();
          persistState();
        };
      };
      request.onerror = () => {};
    }
  }

  function selectExam(num, mode='balanced'){
    const result = [];
    const pool = questions.slice();
    const targets = computeModuleTargets(num);
    const selectedByModule = Object.fromEntries(Object.keys(targets).map(moduleKey => [moduleKey, 0]));

    Object.entries(targets).forEach(([moduleKey, target]) => {
      if(target <= 0) return;
      const moduleQuestions = pool.filter(q => getModuleKey(q) === moduleKey)
        .sort((a,b) => scoreCandidate(b, moduleKey, mode, selectedByModule) - scoreCandidate(a, moduleKey, mode, selectedByModule));
      const picks = Math.min(target, moduleQuestions.length);
      for(let i=0; i<picks && result.length < num; i++){
        const q = moduleQuestions[i];
        result.push(q);
        selectedByModule[moduleKey] += 1;
        removeQuestionFromPool(pool, q.id);
      }
    });

    while(result.length < num && pool.length > 0){
      const ranked = pool
        .map(q => ({ q, score: scoreCandidate(q, getModuleKey(q), mode, selectedByModule) }))
        .sort((a,b) => b.score - a.score);
      const pick = ranked[0];
      if(!pick) break;
      result.push(pick.q);
      removeQuestionFromPool(pool, pick.q.id);
    }

    shuffle(result);
    lastRun = result.map(q => q.id);
    persistState();
    return result;
  }

  // UI helpers
  const startBtn = document.getElementById('startBtn');
  const resumeBtn = document.getElementById('resumeBtn');
  const examEl = document.getElementById('exam');
  const weakAreasEl = document.getElementById('weakAreas');
  const weakAreasList = document.getElementById('weakAreasList');
  const reviewMapBtn = document.getElementById('reviewMapBtn');
  const closeReviewMapBtn = document.getElementById('closeReviewMapBtn');
  const questionCard = document.getElementById('questionCard');
  const timeLeftEl = document.getElementById('timeLeft');
  const currentIndexEl = document.getElementById('currentIndex');
  const totalQuestionsEl = document.getElementById('totalQuestions');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  const detailModal = document.getElementById('detailModal');
  const detailModalTitle = document.getElementById('detailModalTitle');
  const detailModalBody = document.getElementById('detailModalBody');
  const detailModalClose = document.getElementById('detailModalClose');
  const detailModalOpenLink = document.getElementById('detailModalOpenLink');

  function getModuleReviewPath(moduleKey){
    const mapping = {
      module_01: { label: 'Module 01', path: 'Adm Fundations/basic/modelo 01.md' },
      module_02: { label: 'Module 02', path: 'Adm Fundations/basic/modulo 02.md' },
      module_03: { label: 'Module 03', path: 'Adm Fundations/basic/modulo 03.md' },
      module_04: { label: 'Module 04', path: 'Adm Fundations/basic/modulo 04.md' },
      module_05: { label: 'Module 05', path: 'Adm Fundations/basic/mosulo 05.md' },
      module_06: { label: 'Module 06', path: 'Adm Fundations/basic/modulo 06.md' },
      module_07: { label: 'Module 07', path: 'Adm Fundations/basic/modulo 07.md' },
      module_08: { label: 'Module 08', path: 'Adm Fundations/basic/modulo 08.md' },
      module_general: { label: 'General', path: 'Adm Fundations/basic/contexto.md' }
    };
    return mapping[moduleKey] || null;
  }

  function getWeakAreasData(){
    const moduleTotals = {};
    Object.entries(stats).forEach(([qid, entry]) => {
      const question = questions.find((q) => q.id === qid);
      if(!question) return;
      const moduleKey = getModuleKey(question);
      const bucket = moduleTotals[moduleKey] || { attempts: 0, correct: 0 };
      bucket.attempts += Number(entry.attempts || 0);
      bucket.correct += Number(entry.correct || 0);
      moduleTotals[moduleKey] = bucket;
    });

    return Object.entries(moduleTotals)
      .map(([moduleKey, bucket]) => {
        const attempts = Math.max(bucket.attempts || 0, 0);
        const correct = Math.max(bucket.correct || 0, 0);
        const failureRate = attempts ? (1 - correct / attempts) : 0;
        const review = getModuleReviewPath(moduleKey);
        return {
          moduleKey,
          label: getModuleLabel(moduleKey),
          attempts,
          correct,
          failureRate,
          review
        };
      })
      .filter(item => item.attempts >= 1)
      .sort((a, b) => (b.failureRate - a.failureRate) || (b.attempts - a.attempts));
  }

  function renderWeakAreas(){
    if(!weakAreasList) return;
    const data = getWeakAreasData();
    if(!data.length){
      weakAreasList.innerHTML = '<div class="weak-item"><div class="weak-item-meta">No attempts yet. Start an exam to see which modules need additional review.</div></div>';
      return;
    }

    weakAreasList.innerHTML = data.slice(0, 5).map((item) => {
      const percent = Math.round(item.failureRate * 100);
      const reviewUrl = item.review ? (() => {
        const url = new URL('module-viewer.html', window.location.href);
        url.searchParams.set('file', item.review.path);
        return url.toString();
      })() : '#';
      return `
        <div class="weak-item">
          <div class="weak-item-top">
            <strong>${item.label}</strong>
            <span>${percent}% misses</span>
          </div>
          <div class="weak-item-meta">${item.correct}/${item.attempts} correct · ${item.attempts} attempts</div>
          <div class="weak-bar"><span style="width:${Math.max(12, percent)}%"></span></div>
          ${item.review ? `<div class="weak-item-meta" style="margin-top:6px"><a class="weak-link" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">Open official notes</a></div>` : ''}
        </div>`;
    }).join('');
  }

  if(reviewMapBtn){
    reviewMapBtn.onclick = ()=>{
      renderWeakAreas();
      if(weakAreasEl){
        const isVisible = weakAreasEl.style.display === 'block';
        weakAreasEl.style.display = isVisible ? 'none' : 'block';
      }
    };
  }
  if(closeReviewMapBtn){
    closeReviewMapBtn.onclick = ()=>{
      if(weakAreasEl) weakAreasEl.style.display = 'none';
    };
  }

  loadPersistedState();
  renderWeakAreas();

  if(detailModalClose){
    detailModalClose.onclick = ()=>{ if(detailModal) detailModal.style.display='none'; };
  }
  if(detailModal){
    detailModal.onclick = (e)=>{ if(e.target===detailModal) detailModal.style.display='none'; };
  }

  let exam = null; // { questions: [], answers: [], startedAt, durationSec }
  let timerInterval = null;

  startBtn.onclick = ()=>{
    const num = parseInt(document.getElementById('numQuestions').value,10);
    const durationMin = parseInt(document.getElementById('durationMin').value,10);
    const mode = document.getElementById('examMode').value;
    startExam(num, durationMin*60, mode);
  };

  function startExam(num, durationSec, mode='balanced'){
    const selected = selectExam(num, mode);
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
    persistState();
    // show results with explanations for wrong answers
    showResults(results, correctCount);
  }

  function toUrlPath(path){
    return '/' + path.split('/').map(segment => encodeURIComponent(segment)).join('/');
  }

  function slugify(text){
    return String(text || '').toLowerCase().trim()
      .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function extractSectionFromMarkdown(markdown, anchor, fallbackLabel){
    const lines = markdown.split(/\r?\n/);
    const headingRegex = /^(#{1,6})\s+(.*)$/;
    const headings = [];
    lines.forEach((line, index) => {
      const match = line.match(headingRegex);
      if(match){ headings.push({ index, level: match[1].length, text: match[2].trim() }); }
    });

    const targetSlug = slugify(anchor || '');
    const targetLabelSlug = slugify(fallbackLabel || '');
    const matchHeading = headings.find((heading) => {
      if(targetSlug && slugify(heading.text) === targetSlug) return true;
      return !!targetLabelSlug && slugify(heading.text) === targetLabelSlug;
    });

    if(!matchHeading) return markdown.trim();

    const startIndex = matchHeading.index;
    let endIndex = lines.length;
    for(let i = startIndex + 1; i < lines.length; i++){
      const match = lines[i].match(headingRegex);
      if(match && match[1].length <= matchHeading.level){ endIndex = i; break; }
    }

    return lines.slice(startIndex, endIndex).join('\n').trim();
  }

  async function getTopicDetails(q){
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
      q40: { path: 'Adm Fundations/basic/modulo 03.md', anchor: 'forms-and-lists', label: 'Module 03 — Forms, Lists and dot-walking' },
      q104: { path: 'Adm Fundations/basic/mosulo 05.md', anchor: 'data-pills', label: 'Module 05 — Data Pills' }
    };

    const item = (q && q.id && sourceMap[q.id]) || (q && q.details) || null;
    if(!item){
      if(q && q.source){
        const raw = q.source;
        if(raw.includes(' — ')){
          const [path, label] = raw.split(' — ');
          return { path, label, anchor: '' };
        }
        return { path: raw, label: raw, anchor: '' };
      }
      return null;
    }

    const detailItem = { ...item, label: item.label || 'Study topic', path: item.path || '', anchor: item.anchor || '', excerpt: item.excerpt || '' };
    if(detailItem.excerpt) return detailItem;

    if(detailItem.path){
      try{
        const response = await fetch(toUrlPath(detailItem.path));
        if(response.ok){
          const markdown = await response.text();
          detailItem.excerpt = extractSectionFromMarkdown(markdown, detailItem.anchor, detailItem.label);
        }
      } catch(err){
        console.warn('Unable to load topic details', err);
      }
    }

    return detailItem;
  }

  async function showTopicDetails(q){
    const item = await getTopicDetails(q);
    if(!item) return;
    if(detailModalTitle) detailModalTitle.textContent = item.label || 'Study topic';
    if(detailModalBody){
      detailModalBody.innerHTML = '';
      const pre = document.createElement('pre');
      pre.className = 'topic-snippet';
      pre.textContent = item.excerpt || 'No topic excerpt is available yet.';
      detailModalBody.appendChild(pre);
    }
    if(detailModalOpenLink){
      const viewerUrl = new URL('module-viewer.html', window.location.href);
      viewerUrl.searchParams.set('file', item.path || '');
      if(item.anchor) viewerUrl.searchParams.set('anchor', item.anchor);
      detailModalOpenLink.href = viewerUrl.toString();
      detailModalOpenLink.style.display = item.path ? 'inline-block' : 'none';
    }
    if(detailModal) detailModal.style.display = 'flex';
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
        const src = document.createElement('div'); src.className='source';
        const srcLabel = document.createElement('span'); srcLabel.textContent = 'See details: ';
        const detailBtn = document.createElement('button');
        detailBtn.className = 'detail-btn';
        detailBtn.textContent = 'Open topic details';
        detailBtn.onclick = ()=> showTopicDetails(r.q);
        src.appendChild(srcLabel);
        src.appendChild(detailBtn);
        item.appendChild(src);
      }
      list.appendChild(item);
    });
    res.appendChild(list);
    renderWeakAreas();
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
