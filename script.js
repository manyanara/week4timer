// navigate to new html when clicking start button 
var start = document.querySelector(".start")
start.addEventListener("click", function() {
    window.location.pathname = "problems.html"
})

// start timer once problem.html is opened and pull out of the game when the timer runs out
// create operations that add or subtract time if specific items are selected AND pulls up a new question
// push correct and incorrect marks to the total
// save initials and score 