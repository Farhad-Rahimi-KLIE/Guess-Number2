let ComputerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("change.wav");

const init = () => {
  ComputerGuess = Math.floor(Math.random() * 100);
  document.getElementById("newgamebutton").style.display = "none";
  document.getElementById("gamearea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gamearea").style.display = "block";
};

const startNewGame = () => {
  document.getElementById("newgamebutton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

const newGameBegin = () => {
  audio.play();
  window.location.reload();
};

// main logic of app
const compareGuess = () => {
  audio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  //   check the value of low and high
  if (userGuess.length < maxGuess) {
    if (userNumber > ComputerGuess) {
      userGuessUpdate.innerHTML = "guesses to high😮";
      userNumberUpdate.value = "";
    } else if (userNumber < ComputerGuess) {
      userGuessUpdate.innerHTML = "guesses to low😏";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "it's Correct😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > ComputerGuess) {
      userGuessUpdate.innerHTML = `you loss!! correct number was${ComputerGuess} `;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < ComputerGuess) {
      userGuessUpdate.innerHTML = `you loss!! correct number was${ComputerGuess} `;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "it's Correct😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }
  document.getElementById("attemps").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
