const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6dET1N8d3ca8bCIiVoCb/scores/'

const fetchScores = async () => {
    const response = await fetch(baseUrl)
    console.log(response)
    const data = await response.json()
    console.log(data)
}

const postScores = async (_name, score) => {
    fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: _name,
      score: score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
export {fetchScores, postScores}
