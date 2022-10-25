import { renderScore } from './renderScores';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6dET1N8d3ca8bCIiVoCb/scores/';

const fetchScores = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  let { result } = data;

  result = result.sort((b, a) => {
    let ret;
    if (parseInt(a.score, 10) > parseInt(b.score, 10)) {
      ret = -1;
    } else if (parseInt(a.score, 10) < parseInt(b.score, 10)) {
      ret = 1;
    } else {
      ret = 0;
    }
    return ret;
  });

  renderScore(result);
};

const postScores = (_name, score) => {
  fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: _name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
export { fetchScores, postScores };
