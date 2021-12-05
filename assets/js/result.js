const mostRecentScore = localStorage.getItem('mostRecentScore')
const finalScore = document.querySelector('#finalScore')
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const api_base_url = "https://highscores-api.azurewebsites.net/highscores"
const apiKey = "fc04308b-bc51-4df3-a1e0-6f8fa0076d03"

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

saveScoreBtn.addEventListener("click", sendHighScore())

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})

async function sendHighScore() {
    let response = await fetch(api_base_url, {
        method: "POST",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Data: username.value,
            userId: mostRecentScore
        })
    })
    let data = await response.json()
    // return data
    // console.log("new", data)
}
// sendHighScore(mostRecentScore, username)


//Saving scores that user entered
// function saveHighScore(e) {
//     e.preventDefault()

//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     }

//     highScores.push(score)

//     highScores.sort((a, b) => {
//         return b.score - a.score
//     })

//     //Max user 


//     localStorage.setItem("highScores", JSON.stringify(highScores))
//     window.location.assign("")


// }