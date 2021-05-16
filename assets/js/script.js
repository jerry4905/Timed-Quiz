// global variables
let timeLeft = 5;
//Store questions and answers in object array
var questions = [

    { q: "Inside which HTML element do we put the JavaScript?", a: "a"},
    // a: "<script>"
    { q: "Where is the correct place to enter a javascript?", a: "both head and body"},
    { q: "How do you create a function in JavaScript?", a: "function myFunction()"},
    { q: "How do you call a function named 'myFunction'?", a: "myFunction()"},
    { q: "How does a WHILE loop start?", a: "while (i <= 10)"},
    { q: "A string is a number?", a: "False" },
    { q: "How does a FOR loop start?", a: "for (i=0; i <=5; i++)"},
    { q: "How can you add a comment in a JavaScript?", a: "//this will be a comment"},
    { q: "JavaScript is the same as Java.", a: "False"},
    { q: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", a: "if(i !=5)"}
]

// capture DOM El 
let modalEl = document.querySelector("#start-modal");
let currentLeaderEl = document.querySelector("#current-leader");
let currentScoreEl = document.querySelector("#current-score");
let timeLeftEl = document.querySelector("#countdown");
let timeLeftContainerEl = document.querySelector("#time-left-container");
let questionEl = document.querySelector("#question");
let pa1El = document.querySelector("#pa1");
let pa2El = document.querySelector("#pa2");
let pa3El = document.querySelector("#pa3");
let pa4El = document.querySelector("#pa4");
let startGamebtn = document.querySelector("#start-game-btn");
let rightWrongEl = document.querySelector("#right-wrong");

// local storgae 
let currentLeader = localStorage.getItem("highscorer");
let currentScore = localStorage.getItem("highscore");

// set cureent leader if no socres 
if (currentLeader === null){
    currentLeaderEl.textContent = "Can Be You!";
} else {
    currentLeaderEl.textContent = currentLeader;
}
if (currentScore === null){
    currentScoreEl.textContent = "0000";
} else {
    currentScoreEl.textContent = currentScore;
}

// Set up a timer function 

function countdown() {
    startGamebtn.addEventListener("click", () => {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage("Game Over!");
      }
    }, 1000);
  })}

function startGame () {
    startGamebtn.addEventListener("click", () => {
    // hide the modal 
    modalEl.style.display = "none";
    if (timeLeft > 0) {
        for (var i = 0; i < questions.length; i++) {
            //Display cureent question to answer
            var answer = {}
            questionEl.textContent
         

            if (
            (answer === questions[i].a)
            ){
            // Increase score
            currentScore++;
            // inform user in rightwrong div 
            rightWrongEl.textContent = "Correct";
        } else {
            rightWrongEl.textContent = "Wrong";
        }
        }

    } else {
    alert("Game Over")}
    })
};
startGamebtn.addEventListener("click", startGame());

