//Dom Elements 
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('#choice'))
const progressText = document.querySelector('#questionProg');
const highScore = document.querySelector('#score');

const MAX_QUESTIONS = 8
const scorePoint = 100

let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []
let questionCounter = 0
let score = 0

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
    progressText.innerText = `Question: ${questionCounter} / ${MAX_QUESTIONS}`

    //A stopper to stop displaying the same questions
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true

    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('result.html')
    }
}
function incrementScore(num) {
    score += num
    highScore.innerText = score
}
//Display next question on click of a choice
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        //If the answer is correct +100 points
        if (classToApply === 'correct') {
            incrementScore(scorePoint)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            displayQnA()
        }, 1000)
    })
})

start()