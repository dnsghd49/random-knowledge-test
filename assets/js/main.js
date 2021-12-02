//Dom Elements 
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice'))
const progressText = document.querySelector('#questionProg');
const highScore = document.querySelector('#score');

const MAX_QUESTIONS = 4
const scorePoint = 0

let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []
let questionCounter = 0

//Getting questions values  
function start() {
    availableQuestions = [...questions]
    displayQnA()
}


//Tracking the score
function displayQnA() {

    //Display question
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    //Display choice
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    //Display number of questions
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    //A stopper to stop displaying the same questions
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

//Display next question on click of a choice
choices.forEach(choice => {
    choice.addEventListener('click', displayQnA)
})

highScore.innerHTML = scorePoint

start()