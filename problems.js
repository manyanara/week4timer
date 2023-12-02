
// start timer once problem.html is opened and pull out of the game when the timer runs out
var TimeID = document.querySelector("#time")
var secondsLeft = 30;
var questionIndex = 0;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        TimeID.textContent = secondsLeft;

        if (secondsLeft <= 0 || questionIndex >= 5) {
            clearInterval(timerInterval);
            TimeID.textContent = "Times Up!"
            setScore();
        }
    }, 1000);
}
setTime();
// create operations that add or subtract time if specific items are selected AND pulls up a new question

var score = 0;

const questions = [
    {
        "text": "What does HTML stand for?",
        "correct_answer": "Hypertext Markup Language", 
        "A": "Hyphy Techno Million Language",
        "B": "Hyper Technology Mandate Longitude",
        "C": "Hand Tool Making Languages",
        "D": "Handsome Tree Man Life"
    },
    {
        "text": "Pick the correct parameter placement",
        "correct_answer": "function(parameter){}",
        "A": "function () parameter {}",
        "B": "function(parameter){}",
        "C": "function(parameter{})",
        "D": "fuction{parameter}"
    },
    {
        "text": "If my flex direction is set to column, what axis will align items move my elements? ",
        "correct_answer": "New York",
        "A": "column",
        "B": "horizontal",
        "C": "up and down",
        "D": "align items will not affect the element positioning"
    },
    {
        "text": "Which method does not change the original array",
        "correct_answer": "slice",
        "A": "push",
        "B": "slice",
        "C": "shift",
        "D": "splice"
    },
    {
        "text": "Which is not a primitive type",
        "correct_answer": "Template Literal",
        "A": "string",
        "B": "Boolean",
        "C": "Template Literal",
        "D": "Null"
    },
];

/////////////////////////////// inputs question text 
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

document.getElementById("answer1").addEventListener("click", function checkAnswer1() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score++,
        setTime(secondsLeft + 5)
    } else{
       setTime(secondsLeft-5)
    }
    
    questionIndex++,
    displayQuestions(questionIndex)
});

document.getElementById("answer2").addEventListener("click", function checkAnswer2() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score++,
        setTime(secondsLeft + 5)
    } else{
       setTime(secondsLeft-5)
    }
    
    questionIndex++,
    displayQuestions(questionIndex)
});

document.getElementById("answer3").addEventListener("click", function checkAnswer3() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score++,
        console.log('added time')
        setTime(secondsLeft + 5)
    } else{
        console.log('subtracted time')
       setTime(secondsLeft-5)
    }
    
    questionIndex++,
    displayQuestions(questionIndex)
});

document.getElementById("answer4").addEventListener("click", function checkAnswer4() {
    var question = questions[questionIndex];
    if (this.textContent === question.correct_answer){
        score++,
        setTime(secondsLeft + 5)
    } else{
       setTime(secondsLeft-5)
    }
    
    questionIndex++,
    displayQuestions(questionIndex)
});

displayQuestions();
// opens form to add name and score
var user = []; 

function setScore(){
    var name= window.prompt('Enter your name to view scores')

    var userArray = {
        firstName: name,
        finalScore: score, 
    }

    localStorage.setItem("user", JSON.stringify(user));
    console.log('saved in local storage')

    var lastGrade = JSON.parse(localStorage.getItem('user'));
    // var history = document.getElementById(scoreList)

    if (lastGrade !== null){
        console.log('pulled from local storage')
        var pastScores = document.getElementById('pastScores')

        pastScores.style.display = 'block'
        
        var li = document.createElement("li");
        li.textContent= lastGrade.firstName + " : " + score,
        pastScores.appendChild(li);
    }
    var buttons = document.getElementById('buttons')
    buttons.style.display = 'none';
    
    document.getElementById('questionText').textContent= lastGrade.firstName + " received " + score + " out of 5 "
}

function init(){
    var storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser!== null){
        user = storedUser;
    }
}



