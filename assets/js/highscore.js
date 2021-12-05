const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
const api_base_url = "https://highscores-api.azurewebsites.net/highscores"
const apiKey = "fc04308b-bc51-4df3-a1e0-6f8fa0076d03"

async function getHighScores() {
    let response = await fetch(api_base_url, {
        headers : {
            "x-api-key": apiKey
        }
    })
    let highscores = await response.json()

    let test1 = highscores.id
    let lists = document.createElement("li")
    lists.innerHTML = test1
    lists.appendChild(highScoresList)


    console.log(highscores)
}

// let highscores = await getHighScores();
// console.log(highscores)
getHighScores()
// highScoresList.innerHTML =
//     highScores.map(score => {
//         return `<li class="high-score">${score.name} - ${score.score}</li>`
//     }).join("")