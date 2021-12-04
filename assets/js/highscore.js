const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
const api_base_url = "https://highscores-api.azurewebsites.net/swagger/v1/swagger.json"
const apiKey = "fc04308b-bc51-4df3-a1e0-6f8fa0076d03"

async function getHighScores() {
    let response = await fetch(api_base_url, {
        headers : {
            "x-api-key": apiKey
        }
    })
    let highscores = await response.json()
    // return highscores;
    console.log(highscores)
    console.log(highscores)
}

// let highscores = await getHighScores();
// console.log(highscores)
getHighScores()
highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("")