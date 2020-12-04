let timerInterval;
var startButton = document.getElementById('start-btn');
var timerText = document.getElementById('time-display');
var highScoreBtn = document.getElementById('view-high-score-btn');
var firstPageContainer = document.getElementById('main-container');
var questionHolder = document.createElement('h2')
var buttonDisplay = document.getElementById('outcome-display');
var showResults = document.createElement('button')
var choicesA = document.createElement('button')
choicesA.classList = 'btn btn-info'
var choicesB = document.createElement('button')
choicesB.classList = 'btn btn-info'
var choicesC = document.createElement('button')
choicesC.classList = 'btn btn-info'
var choicesD = document.createElement('button')
choicesD.classList = 'btn btn-info'

const questions = [
    {
        Ques: " Which HTML attribute is used to define inline styles?",
        choices: ["A. font", "B. class", "C. styles", "D. style"],
        Correct: "D. style",

    },
    {
        Ques: " Which is the extension of javascript file?",
        choices: ["A. .js", "B. .jv", "C. .jc", "D. .jp"],
        Correct: "A. .js",

    },
    {
        Ques: " Which CSS property sets the stack order of an element?",
        choices: ["A. z-index", "B. position", "C. overflow", "D. clip"],
        Correct: "A. z-index",

    },
    {
        Ques: " What language defines the behavior of a web page?",
        choices: ["A. HTML", "B. CSS", "C. XML", "D. Java Script"],
        Correct: "D.Java Script",

    },
    {
        Ques: "  _________ keyword is used to declare variables in javascript.",
        choices: ["A. Var", "B. Dim", "C. String", "D. None of the above"],
        Correct: "A. Var",


    },
]

var i = 0;
var currentQuestion = 0
var score = 0
var totalQuestion = questions.length
var count = 20;
var timePerQuestion = 20;
var timeTotal = (20 * questions.length)


function myQuize() {
    // start the timer
    timer()

    // then, show first question to user
    loadQuestion()
    
    // set up elements (div, h2, list, list item,)
    // when question is asked, replace text content with current question and answers
    
    // questions[i].Ques
    // aftter answer button is clicked, i++
    
}

// function nextquestion(questionText)
function nextQuestion(questionText) {
    
}


// var question = question[questionText]
function loadQuestion() {
    firstPageContainer.innerHTML = ''
    questionHolder.textContent = questions[i].Ques
    firstPageContainer.append(questionHolder)

    questions[i].choices.forEach(choice => {
        const btn = document.createElement('button')
        btn.classList = 'btn btn-info'
        btn.textContent = choice
        btn.id = choice
        btn.addEventListener('click', (e) => {
            console.log(e.target.id)
            console.log(questions[i].Correct)
            console.log(e.target.id===questions[i].Correct)
            if(e.target.id===questions[i].Correct){
                score++
            }
            else{score--
                console.log('insideelse', score)

            }

            // if value of button clicked is equal to questions[i].Correct
            console.log(e.target.id==questions[i].totalQuestion)
                // add to score, 
                // next question
            // else, go to next question
            i++
            loadQuestion()
        })
        firstPageContainer.append(btn)
    })
}


function timer() {
    timerInterval = setInterval(() => {
        timeTotal--;
        timerText.textContent = timeTotal

        if (timeTotal === 0) {
            clearInterval(timerInterval)
        }
    }, 1000);
}


// on submit, show results
function showResults(question) { }

// submitButton.addEventListener('click', showResults);
// on click of start button, start timer
startButton.addEventListener('click', myQuize)


