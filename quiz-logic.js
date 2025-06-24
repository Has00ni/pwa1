import { addKnownWord } from './app.js';
import Chart from 'https://cdn.jsdelivr.net/npm/chart.js';

const quizWords = [
  { ar: 'باب',   en: 'door',  pos: 'noun' },
  { ar: 'رَحمة', en: 'mercy', pos: 'noun' }
];

let correct = 0;

/* ► Quiz starten wanneer gebruiker klikt */
document.getElementById('quizBtn').addEventListener('click', startQuiz);

function startQuiz() {
  correct = 0; // reset
  quizWords.forEach(word => {
    const answer = prompt(`Wat betekent: ${word.ar}?`).trim().toLowerCase();
    if (answer === word.en) {
      correct++;
      addKnownWord(word.ar, word.en, word.pos);
    }
  });
  drawChart();
}

function drawChart() {
  const ctx = document.getElementById('progressChart').getContext('2d');
  const done = correct;
  const total = quizWords.length;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Goed', 'Fout'],
      datasets: [{
        data: [done, total - done],
        backgroundColor: ['#4CAF50', '#F44336']
      }]
    },
    options: {
      plugins: { legend: { display: false } }
    }
  });
}
