// const test = document.getElementById("Choice")
const currentQuestionIndex = 0
let title = document.querySelector("h1")


function start() {
    let questions = [
        {
            question: "wat",
            choice: "1",
            choice: "2",
            choice: "3",
            choice: "4"
        }
    ]

    let currentQuestion = questions[currentQuestionIndex]
    title.innertext = currentQuestion.question
    document.append()
    // test.innertext = ""
}

start()