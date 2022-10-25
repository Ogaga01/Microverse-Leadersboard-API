import './style.css';
import { fetchScores } from './modules/API';
import { scoreAdd } from './modules/addScore';

const refreshBtn = document.querySelector('.refresh-btn')

fetchScores()

scoreAdd()

refreshBtn.addEventListener('click', () => {
    fetchScores()
})
