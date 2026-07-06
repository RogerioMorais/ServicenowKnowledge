CSA ServiceNow Simulator

How to use

1. Open `simulado_csa/index.html` in your browser (double-click or use a local web server).
2. Configure the number of questions and duration, then click "Start Exam".
3. Answer questions. At the end the app will grade and show explanations for wrong answers and a link to the source file.

Notes

- The app stores per-question stats and the last run in the browser localStorage.
- Selection algorithm: 10% questions from last run, 60% prioritized by failure rate, rest randomized.
- Default failure rate for unseen questions is 100% so they get priority until answered correctly.

Files

- `questions.json` — question bank derived from course material
- `index.html`, `app.js`, `styles.css` — static web app
- The app runs entirely in the browser, no server required.

Docker (serve via nginx)

If opening `index.html` via `file://` your browser may block `fetch()` for `questions.json`. Use Docker to run a lightweight static server:

Build the image (from `simulado_csa` folder):

```bash
docker build -t csa-simulator:latest .
```

Run the container and expose it on port 8080:

```bash
docker run --rm -p 8080:80 csa-simulator:latest
```

Open the simulator at: http://localhost:8080

Notes:
- The app persists per-question stats and last-run in browser `localStorage`.
- To reset stats clear site data in your browser or remove the `localStorage` entries `csa_stats_v1` and `csa_lastrun_v1`.
