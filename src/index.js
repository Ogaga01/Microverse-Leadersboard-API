import './style.css';
import { fetchScores } from './modules/API.js';
import scoreAdd from './modules/addScore.js';

const refreshBtn = document.querySelector('.refresh-btn');

fetchScores();

scoreAdd();

refreshBtn.addEventListener('click', () => {
  fetchScores();
});
