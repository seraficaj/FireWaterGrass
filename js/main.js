console.log("I AM CONNECTED TO YOUR HTML FILE !!!");

/*----- constants -----*/
const types = {
  fire: "fire",
  water: "water",
  grass: "grass",
};

/*----- state variables -----*/
let p1Choice,
  p2Choice,
  p1Score = 0,
  p2Score = 0,
  winner;

let state = {
  p1Choice: p1Choice,
  p2Choice: p2Choice,
  p1Score: p1Score,
  p2Score: p2Score,
  winner: undefined,
};

/*----- cached elements  -----*/
// Player Choices
const fireButton = document.querySelector("#fireButton");
const waterButton = document.querySelector("#waterButton");
const grassButton = document.querySelector("#grassButton");

// Display Game Info
const p1ScoreDisplay = document.querySelector("#p1Score");
const p2ScoreDisplay = document.querySelector("#p2Score");
const p1ChoiceDisplay = document.querySelector("#p1Choice");
const p2ChoiceDisplay = document.querySelector("#p2Choice");
const winnerDisplay = document.querySelector("#winnerDisplay");

// Reset Game
const resetButton = document.querySelector("#resetButton");

/*----- event listeners -----*/
function handleChoice(evt) {
  state.p1Choice = evt.target.value;
  computerChooses();
  compareChoices(state.p1Choice, state.p2Choice);
  declareWinner();
  render();
}

function handleReset(evt) {
  reset();
  init();
}

/*----- functions -----*/
function computerChooses() {
  // computer selects choice here
  function getRandomProperty(obj) {
    const keys = Object.keys(obj);

    return keys[Math.floor(Math.random() * keys.length)];
  }
  // update p2Choice in state to be random type
  state.p2Choice = types[getRandomProperty(types)];
}

//   compareChoices
//       - update state values:
//           - update score
//           - replace player's choices to none because they have to pick for next round
function compareChoices(t1, t2) {
  // fire
  if (t1 === "fire" && t2 === "water") {
    state.p2Score += 1;
  } else if (t1 === "fire" && t2 === "grass") {
    state.p1Score += 1;
    // water
  } else if (t1 === "water" && t2 === "fire") {
    state.p1Score += 1;
  } else if (t1 === "water" && t2 === "grass") {
    state.p2Score += 1;
    // grass
  } else if (t1 === "grass" && t2 === "water") {
    state.p1Score += 1;
  } else if (t1 === "grass" && t2 === "fire") {
    state.p2Score += 1;
  } else {
    state.p1Score += 1;
    state.p2Score += 1;
  }
  console.log(state);
}
//   declareWinner
//       - check score after 5 rounds
//       - return winner
function declareWinner() {
  if (state.p1Score === 5 && state.p2Score < 5) {
    state.winner = "P1";
  }
  if (state.p1Score < 5 && state.p2Score === 5) {
    state.winner = "P2";
  }
  if (state.p1Score === 5 && state.p2Score === 5) {
    state.winner = "BOTH";
  }
  if (state.winner !== undefined) {
    fireButton.removeEventListener("click", handleChoice);
    waterButton.removeEventListener("click", handleChoice);
    grassButton.removeEventListener("click", handleChoice);
  }
}

//   render
//       - show player's choices
//       - show score
//       - show winner/loser
function render() {
  p1ScoreDisplay.textContent = state.p1Score;
  p2ScoreDisplay.textContent = state.p2Score;
  p1ChoiceDisplay.textContent = state.p1Choice;
  p2ChoiceDisplay.textContent = state.p2Choice;
  winnerDisplay.textContent = state.winner;
}

function reset() {
  state = {
    p1Choice: undefined,
    p2Choice: undefined,
    p1Score: 0,
    p2Score: 0,
    winner: undefined,
  };
  fireButton.removeEventListener("click", handleChoice);
  waterButton.removeEventListener("click", handleChoice);
  grassButton.removeEventListener("click", handleChoice);
  render();
}

function init() {
  fireButton.addEventListener("click", handleChoice);
  waterButton.addEventListener("click", handleChoice);
  grassButton.addEventListener("click", handleChoice);
}
init();
resetButton.addEventListener("click", handleReset);
