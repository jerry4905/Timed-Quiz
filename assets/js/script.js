// global variables
let timeLeft = 5;
//Store questions and answers in object array
var questions = [
    { q: "A string is a number?", a: False },
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
