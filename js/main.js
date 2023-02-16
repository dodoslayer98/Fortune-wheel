const spinWheelValues = {
  1: 500,
  2: 1000,
  3: "bankrupt",
  4: 200,
  5: "Lose a turn",
  6: 800,
  7: 300,
  8: 600,
  9: 400,
  10: 700,
  11: 200,
  12: 300,
  13: 200,
};

const topic = {
  tvShows: [
    "Band of Brothers",
    "Breaking Bad",
    "Chernobyl",
    "The Wire",
    "Game of Thrones",
    "Avatar The Last Airbender",
    "The Sopranos",
    "Rick and Morty",
    "The World at War",
    "Our Planet",
    "The Blue Planet",
    "The Twilight Zone",
    "Life",
    "The Civil War",
    "Sherlock",
    "Friends",
    "The Office",
    "The Simpsons",
    "Black Mirror",
    "The Mandalorian",
    "The Boys",
    "Stranger Things",
    "House of Cards",
    "The Crown",
    "The West Wing",
    "True Detective",
    "Better Call Saul",
    "Firefly",
    "Atlanta",
    "The Expanse",
    "Deadwood",
    "Hannibal",
  ],
};

const squareTextValues = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

const wheelStatus = null;
let usedLetters = [];
let player1Name = '';
let player2Name = '';
const player1Score = 0;
const player2Score = 0;
const gameRound = 1;
const playButtonEl = document.getElementById("play-button");
const playModalEl = document.getElementById('play-modal');
const closeModalEl = document.querySelector('.close-play-modal');
const startGameEl = document.getElementById("start-game")
const wheelEl = document.getElementById("spin-status");
const alphabetEl = document.querySelector(".alphabets");
const letterboardEl = document.querySelector(".letterboard");
const spinWheelEl = document.getElementById("spin-status");
const playerOneBoard = document.getElementById('player-one')
const playerTwoBoard = document.getElementById('player-two')
let activePuzzle = "";
let xCord = 0;
let yCord = 0; 
let playerTurn = 1;

//  Initializing the game, Clicking Play Button
playButtonEl.addEventListener("click", function () {
  clearBoard();
  randPuzzle();
  clearLetterInputs();

  const splitWords = activePuzzle.split(" ");
  if (splitWords.length >= 3) {
    renderLetterboard(2, 0);
  } else if (splitWords.length <= 2) {
    renderLetterboard(2, 1);
  }
    
  playModalEl.style.display = 'block';
  

});

// close modal window for player name input
closeModalEl.addEventListener("click", function(){
    playModalEl.style.display = 'none';
})






startGameEl.addEventListener("click",function(){
    const player1NameInput = document.getElementById("player-one-name");
    const player2NameInput = document.getElementById("player-two-name");
    player1Name = player1NameInput.value;
    player2Name = player2NameInput.value;
    console.log(player1Name)
    console.log(player2Name)
    playModalEl.style.display = 'none';
    playerOneBoard.textContent = `${player1Name} Total Score: ${player1Score}`
    playerTwoBoard.textContent = `${player2Name} Total Score: ${player2Score}`



    




})

function play() {





    
}










// Spinning the wheel
spinWheelEl.addEventListener("click", function () {
  spinWheel();
});

// Alphabet input

alphabetEl.addEventListener("click", function (evt) {
  const letterInputEl = `${evt.target.id}`;
  const trueOrFalse = usedLetters.includes(letterInputEl);
  const inputLetterStyleEl = document.getElementById(letterInputEl);
  inputLetterStyleEl.style.color = "white";

  // console.log((inputLetterStyleEl))
  // console.log(usedLetters)

  if (!trueOrFalse) {
    for (let i = 0; i < squareTextValues.length; i++) {
      for (let j = 0; j < squareTextValues[i].length; j++) {
        if (letterInputEl == squareTextValues[i][j]) {
          const squareDisplay = document.getElementById(
            `${j + xCord}-${i + yCord}`
          );
          squareDisplay.textContent = squareTextValues[i][j];
          usedLetters.push(squareTextValues[i][j]);
          // console.log(usedLetters)
        }
      }
    }
  } else {
  }
});

function clearLetterInputs() {
  usedLetters.length = 0;
  const allLetterInputsEl = document.querySelectorAll(".letters");
  allLetterInputsEl.forEach(function (letterEl) {
    letterEl.style.color = "black";
  });

  // console.log(usedLetters)
}

function spinWheel() {
  const wheelKey = Object.keys(spinWheelValues);
  const wheelStatus =
    spinWheelValues[wheelKey[Math.floor(Math.random() * wheelKey.length)]];
  spinWheelEl.textContent = `${wheelStatus}`;
}

function randPuzzle() {
  activePuzzle =
    topic.tvShows[Math.floor(Math.random() * topic.tvShows.length)];
  return activePuzzle;
}

function clearBoard() {
  for (let i = 0; i < squareTextValues.length; i++) {
    for (let j = 0; j < squareTextValues[i].length; j++) {
      squareTextValues[i][j] = " ";
      const squareDisplay = document.getElementById(`${j}-${i}`);
      squareDisplay.textContent = " ";
      squareDisplay.style.backgroundColor = "#1a9988";
    }
  }
}

function renderLetterboard(xOffset, yOffset) {
  const splitWords = activePuzzle.split(" ");
  for (let i = 0; i < splitWords.length; i++) {
    for (let j = 0; j < splitWords[i].length; j++) {
      const splitLetters = splitWords[i].split("");
      const squareDisplay = document.getElementById(
        `${j + xOffset}-${i + yOffset}`
      );
      squareTextValues[i][j] = `${splitLetters[j]}`.toLowerCase();
      squareDisplay.style.backgroundColor = "white";
      xCord = xOffset;
      yCord = yOffset;
      // console.log(squareTextValues)
      // squareDisplay.textContent = squareTextValues[i][j]
    }
  }
}
