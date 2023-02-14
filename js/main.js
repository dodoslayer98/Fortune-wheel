const spinWheelValues = {
    1: 500,
    2: 1000,
    3: 'bankrupt',
    4: 200,
    5: 'Lose a turn',
    6: 800,
    7: 300,
    8: 600,
    9: 400,
    10: 700,
    11: 200,
    12: 300,
    13: 200
}

const topic = {
    tvShows : [ "Band of Brothers", "Breaking Bad", "Chernobyl", "The Wire", "Game of Thrones", "Avatar: The Last Airbender", "The Sopranos", "Rick and Morty", 
    "The World at War", , "Our Planet", "The Blue Planet", "The Twilight Zone", "Life", "The Civil War", "Sherlock", "Friends", "The Office", "The Simpsons",
     "Black Mirror", "The Marvelous Mrs. Maisel", "The Mandalorian", "The Boys", "Stranger Things", "House of Cards", "The Crown", "The West Wing", "True Detective",
    "Better Call Saul", "Firefly", "Atlanta", "The Expanse", "Deadwood", "Hannibal"]
    }



const wheelStatus = null
const usedLetters = []
const player1Score = 0
const player2Score = 0
const gameRound = 1
const playButton = document.getElementById('play-button')
const wheelEl = document.getElementById('spin-status')
const letterEl = document.querySelector('alphabets')

playButton.addEventListener('click', function(){
    // spinwheel()
    randPuzzle()



}
)



function spinWheel(){
    const wheelKey = Object.keys(spinWheelValues)
    const wheelStatus = spinWheelValues[wheelKey[Math.floor(Math.random()*wheelKey.length)]]
    return wheelSeg
}

function randPuzzle(){
   const activePuzzle = topic.tvShows[Math.floor(Math.random()*topic.tvShows.length)]
    return console.log(activePuzzle)
}