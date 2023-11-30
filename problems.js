
// start timer once problem.html is opened and pull out of the game when the timer runs out
var TimeID = document.querySelector("#time")
var secondsLeft = 30;
var questionIndex = 0;

// create operations that add or subtract time if specific items are selected AND pulls up a new question

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
// // secondsLeft <= 0 || 
// console.log(questionIndex)
// if (questionIndex >= questions.length) {
//     // clearInterval(timerInterval);
//     // TimeID.textContent = "Times Up!"
//     setScore();
// }

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
/////////////////////////////// inputs question text 
function displayQuestions() {
    var question = questions[questionIndex];

    var questionEl = document.getElementById("questionText")
    var option1 = document.getElementById("answer1")
    var option2 = document.getElementById("answer2")
    var option3 = document.getElementById("answer3")
    var option4 = document.getElementById("answer4")

    console.log("display question" , questionIndex);
    // if (questionIndex >= questions.length){
    //     console.log('test')
    //     // setScore();
    // }

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

// opens form to add name and score

function setScore(){
    var name= window.prompt('Enter your name to view scores')

    var user = {
        firstName: name,
        finalScore: score, 
    }

    localStorage.setItem("user", JSON.stringify(user));
    console.log('saved in local storage')
    renderScores();
}

function renderScores() {
    var lastGrade = JSON.parse(localStorage.getItem('user'));
    var history = document.getElementById(scoreList)

    if (lastGrade !== null){
        console.log('pulled from local storage')
        var pastScores = document.getElementById('pastScores')

        pastScores.style.display = 'block'
        
        var li = document.createElement("li");
        li.textContent= lastGrade.firstName + " : " + lastGrade.score,
        pastScores.appendChild(li);

        // document.getElementById('saved-name').innerHTML = lastGrade.firstName;
        // document.getElementById('saved-grade').innerHTML = lastGrade.score;
    }

    var buttons = document.getElementById('buttons')
    buttons.style.display = 'none';
    
    document.getElementById('questionText').textContent= lastGrade.firstName + " received " + score + " out of 5 "

}



setTime();
displayQuestions();