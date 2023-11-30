
// start timer once problem.html is opened and pull out of the game when the timer runs out
var TimeID = document.querySelector("#time")
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        TimeID.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            TimeID.textContent = "Times Up!"
        }
    }, 1000);
}

// create operations that add or subtract time if specific items are selected AND pulls up a new question
var questionIndex = 0;
var score = 0;

const questions = [
    {
        "text": "What is the tallest building in the world?",
        "correct_answer": "The Burj Khalifa", 
        "A": "Empire States Building",
        "B": "Salesforce Tower",
        "C": "The Burj Khalifa",
        "D": "The Pentagon"
    },
    {
        "text": "Who is the most annoying",
        "correct_answer": "Carrie",
        "A": "Carrie",
        "B": "Samantha",
        "C": "Charlotte",
        "D": "Miranda"
    },
    {
        "text": "what city should I move to",
        "correct_answer": "New York",
        "A": "Oakland",
        "B": "SLC",
        "C": "New York",
        "D": "Chicago"
    },
    {
        "text": "What pole studio do I go to",
        "correct_answer": "Vrv3",
        "A": "Atomic Allure",
        "B": "VrV3",
        "C": "none",
        "D": "SF Spin + Pole"
    },
    {
        "text": "What is my dogs name",
        "correct_answer": "Bones",
        "A": "Buddy",
        "B": "Carrie",
        "C": "The Burj Khalifa",
        "D": "Bones"
    },
];
// inputs question text 
function displayQuestions() {
    var question = questions[questionIndex];

    var questionEl = document.getElementById("questionText")
    var option1 = document.getElementById("answer1")
    var option2 = document.getElementById("answer2")
    var option3 = document.getElementById("answer3")
    var option4 = document.getElementById("answer4")

    questionEl.textContent = question.text;
    option1.textContent = question.A;
    option2.textContent = question.B;
    option3.textContent = question.C;
    option4.textContent = question.D;
}
 //adds to score based on true/false values and moves to next question
// function checkAnswer

document.getElementById("answer1").addEventListener("click", function checkAnswer() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score ++,
        setTime(secondsLeft + 5)
        questionIndex += 1,
        displayQuestions(questionIndex)
    } else
    questionIndex += 1, 
    setTime(secondsLeft-5)
    displayQuestions(questionIndex)

    if (questionIndex == 5 || secondsLeft === 0){
        setScore();
    }
});
document.getElementById("answer2").addEventListener("click", function checkAnswer() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score ++,
        setTime(secondsLeft + 5)
        questionIndex += 1,
        displayQuestions(questionIndex)
    } else
    questionIndex += 1, 
    setTime(secondsLeft-5)
    displayQuestions(questionIndex)

    if (questionIndex == 5|| secondsLeft === 0){
        setScore();
    }
});
document.getElementById("answer3").addEventListener("click", function checkAnswer() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score ++,
        setTime(secondsLeft + 5)
        questionIndex += 1,
        displayQuestions(questionIndex)
    } else
    questionIndex += 1, 
    setTime(secondsLeft-5)
    displayQuestions(questionIndex)
    
    if (questionIndex == 5 || secondsLeft === 0){
        setScore();
    }
});

document.getElementById("answer4").addEventListener("click", function checkAnswer() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score ++,
        setTime(secondsLeft + 5)
        questionIndex += 1,
        displayQuestions(questionIndex)
    } else
    questionIndex += 1, 
    setTime(secondsLeft-5)
    displayQuestions(questionIndex)

    if (questionIndex ==5  || secondsLeft === 0){
        setScore();
    }
});
// opens form to add name and score

function setScore(){
    var name= window.prompt('Enter your name to view scores')
    // localStorage.setItem("score", score);
    // localStorage.setItem("name", name)

    var user = {
        firstName: name,
        finalScore: score, 
    }

    localStorage.setItem("user", JSON.stringify(user));
    
    renderScores();
}

function renderScores() {
    var lastGrade = JSON.parse(localStorage.getItem('user'));
    if (lastGrade !== null){
        document.getElementById('pastScores').style.display = 'block'

        document.getElementById('saved-name').innerHTML = lastGrade.firstName;
        document.getElementById('saved-grade').innerHTML = lastGrade.score;
    }

    var buttons = document.getElementsByClassName('.answer')
    buttons.style.display = 'none';
    
    document.getElementById('questionText').textContent= lastGrade.firstName + " received " + score + " out of 5 "

    var pastScores = document.getElementById('pastScores')
    pastScores.style.display= 'block';
}


displayQuestions();
setTime();