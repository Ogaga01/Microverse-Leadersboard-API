import { fetchScores, postScores } from './API';

const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const addScore = document.querySelector('.add');

const scoreAdd = () => {
  addScore.addEventListener('click', (name, score) => {
    name = nameInput.value;
    score = scoreInput.value;
    postScores(name, score);
    nameInput.value = '';
    scoreInput.value = '';
  });
  fetchScores();
};
export { scoreAdd };
