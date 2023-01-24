/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}


function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0;

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  }
  // Otherwise human loses (aka set score to -1)    
  else {
    score = -1;
  }
  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result")
  const handsDiv = document.getElementById("hands")
  const scoreDiv = document.getElementById("player-score")

  if (score == -1) {
    resultDiv.innerText = 'You Lose!'
  }
  else if (score == 0) {
    resultDiv.innerText = "It's a tie!"
  }
  else {
    resultDiv.innerText = "You Won!"
  }

  handsDiv.innerHTML = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

  scoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice);
  totalScore['playerScore'] += score;
  showResult(score, playerChoice, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  const endGameBtn = document.getElementById("endGameButton");
  endGameBtn.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  const resultDiv = document.getElementById("result")
  const handsDiv = document.getElementById("hands")
  const scoreDiv = document.getElementById("player-score")

  scoreDiv.innerText = ''
  handsDiv.innerText = ''
  resultDiv.innerText = ''
}

playGame()