// global variables
let timeLeft = 5;
//Store questions and answers in object array
var questions = [
    { q: "A string is a number?", a: False },
    { q: "Inside which HTML element do we put the JavaScript?", a: "<script>"},
    { q: "Where is the correct place to enter a javascript?", a: "both head and body"},
    { q: "How do you create a function in JavaScript?", a: "function myFunction()"},
    { q: "How do you call a function named 'myFunction'?", a: "myFunction()"},
    { q: "How does a WHILE loop start?", a: "while (i <= 10)"},
    { q: "How does a FOR loop start?", a: "for (i=0; i <=5; i++)"},
    { q: "How can you add a comment in a JavaScript?", a: "//this will be a comment"},
    { q: "JavaScript is the same as Java.", a: False},
    { q: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", a: "if(i !=5)"}
]

// apture DOM El 
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
    currentLeaderEl.textContent = "Test your knowledge";
} else {
    currentLeaderEl.textContent = currentLeader;
}
if (currentScore === null){
    currentScoreEl.textContent = "ZERO";
} else {
    currentScoreEl.textContent = currentScore;
}

// Set up a timer function 

var startGame = () => {
    // hide the modal 
    modalEl.style.display = "none";
};

startGamebtn.addEventListener("click", () => {

    let timerCountdown = setinterval(() =>{
        timeLeftEl.textContent = "TIme Left: " + timeLeft;
        timeLeft--;
    })
} )
