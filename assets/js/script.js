// global variables
let timeLeft = 30;
let questionIndex = 0; // questions[questionsIndex]
//Store questions and answers in object array
var questions = [
    { q: "Inside which HTML element do we put the JavaScript?", 
      a: ["<script>", "<HTML>", "<body>", "<insert>"], 
      c: "<script>"},
    { q: "Where is the correct place to enter a javascript?", 
      a: [ "head", "body", "both head and body", "neither"], 
      c: "both head and body"},
    { q: "How do you create a function in JavaScript?", 
      a: [ "call function()","function myFunction()", "// function", ".function"], 
      c: "function myFunction()"},
    { q: "How do you call a function named 'myFunction'?", 
      a: ["myFunction()", "function myFunction()", "call function()", "// function"],
      c: "myFunction()"},
    { q: "How does a WHILE loop start?", 
      a: [ "for (i=0; i <=5; i++)","while (i <= 10)", "for (i = 1)", "None"],
      c: "while (i <= 10)"},
    { q: "A string is a number?", 
      a: ["False", "true", "sometimes", "always"],
      c: "False" },
    { q: "How does a FOR loop start?", 
      a: ["for (i=0; i <=5; i++)", "while (i <= 10)", "for (i = 1)", "None"],
      c: "for (i=0; i <=5; i++)" },
    { q: "How can you add a comment in a JavaScript?", 
      a: [ "<!--this will be a comment-->", "*this will be a comment", "this will be a comment","//this will be a comment"],
      c: "//this will be a comment" },
    { q: "JavaScript is the same as Java.", 
      a: ["False", "true", "sometimes", "always"],
      c: "False" },
    { q: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?", 
      a: [ "while (i <= 10)","if(i !=5)", "for (i = 1)", "None"],
      c: "if(i !=5)" },
];


// capture DOM El 
let modalEl = document.querySelector("#start-modal");
let currentLeaderEl = document.querySelector("#current-leader");
let currentScoreEl = document.querySelector("#current-score");
let timeLeftEl = document.querySelector("#countdown");
let timeLeftContainerEl = document.querySelector("#time-left-container");
let questionContainerEl = document.querySelector('#question-container');
let questionEl = document.querySelector("#question");
let option1El = document.querySelector("#a1");
let option2El = document.querySelector("#a2");
let option3El = document.querySelector("#a3");
let option4El = document.querySelector("#a4");
let startGamebtn = document.querySelector("#start-game-btn");
let rightWrongEl = document.querySelector("#right-wrong");

// local storgae access leader and score 
let currentLeader = localStorage.getItem("highscorer");
let currentScore = localStorage.getItem("highscore");

// set cureent leader if no socres 
if (currentLeader === null) {
    currentLeaderEl.textContent = "Can Be You!";
} else {
    currentLeaderEl.textContent = currentLeader;
}
if (currentScore === null) {
    currentScoreEl.textContent = "0000";
} else {
    currentScoreEl.textContent = currentScore;
}

// Set up a timer function 

function countdown() {
    var timeLeft = 30;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeftEl` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timeLeftEl` to show the remaining seconds
            timeLeftEl.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, add 'second' warning
            timeLeftEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timeLeftEl` to an empty string
            timeLeftEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            alert("Game Over!")
            // if highscore update name
            if (newScore > currentScore || currentScore === 'null') {
                newHighScore();
            }
          }
    }, 1000);
};

function newHighScore(){
         // save final score and scorer to local storage for next game
           localStorage.setItem("highscore", newScore);
           localStorage.setItem("highscorer", prompt("New High Score! Enter name"));
}

function startGame() {
    startGamebtn.addEventListener("click", function () {
        // hide the modal 
        modalEl.style.display = "none";

        //start timer
        countdown();
        // reset scofe 
        newScore = 0;
        // display questions
        display();    

});
}
function display() {
    questionContainerEl.innerHTML = '';
  questionEl.textContent = questions[questionIndex].q;
  questionContainerEl.appendChild(questionEl);
  // update question if time left
  for (var i = 0; i < questions[questionIndex].a.length; i++) {
    var optionEl = document.createElement('button');
    optionEl.setAttribute('value', questions[questionIndex].a[i]);
    optionEl.textContent = questions[questionIndex].a[i];
    optionEl.addEventListener('click', checkAnswer);
    questionContainerEl.appendChild(optionEl);


}

//if (questionContainerEl.innerHTML === ''){
//    alert("gameover")}

};
function checkAnswer() {
    console.log("We'll be checking the answer here.");
    console.log('this.value', this.value);
    if (this.value === questions[questionIndex].c) {
      // Increase score
      newScore++;
      // inform user in rightwrong div
      rightWrongEl.textContent = 'Correct';
    } else {
      // logic to penalize for time
      rightWrongEl.textContent = 'WRONG!';
      timeLeft---5;
    }
    questionIndex++;
    display();
  }
startGame()

