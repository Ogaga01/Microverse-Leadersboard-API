const listContainer = document.querySelector('.score-container');

const renderScore = (scores) => {
  listContainer.innerHTML = '';

  scores.forEach((score) => {
    const html = `
            <li class="score-list">
                    <p class="score-item">${score.user}</p>
                    <span class="score">${score.score}</span>
                </li>
        `;
    listContainer.insertAdjacentHTML('afterbegin', html);
  });
};
export default { renderScore };
