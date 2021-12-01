//Dom Elements 
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice'))
const MAX_QUESTIONS = 4


let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []

//Getting questions values  
function start() {
    availableQuestions = [...questions]
    displayQnA()
}


//Tracking the score
function displayQnA() {

//Asking on track question 
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

//Takes the choice that user picked
    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

start()