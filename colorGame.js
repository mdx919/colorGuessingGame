document.getElementById("set-rgb-color").innerHTML = 'waiting for new color...';
let paragraph = document.querySelector("#try-again");
let squares = document.querySelectorAll(".square");
let titleBackground = document.querySelector(".title");
let newColorButton = document.querySelector("#new-color");
let hardBtn = document.querySelector("#hard");
let easyBtn = document.querySelector("#easy");
let difficultyLvl = 6;

hardBtn.classList.add('changeDiffLvl');

hardBtn.addEventListener("click", function() {
  difficultyLvl = 6;
  hardBtn.classList.add('changeDiffLvl');
  easy.classList.remove('changeDiffLvl');
  for (let i = 3; i < squares.length; i++) {
    squares[i].classList.remove('secondBlocks');
  }
  startNewGame();
})
easyBtn.addEventListener("click", function(){
  difficultyLvl = 3;
  easy.classList.add('changeDiffLvl');
  hard.classList.remove('changeDiffLvl');
  for (let i = 3; i < squares.length; i++) {
    squares[i].classList.add('secondBlocks');
  }
  startNewGame();
});


function randomNumbers(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function startNewGame() {
  let colors = [
   "rgb(" + randomNumbers(256) + ", " + randomNumbers(256) + ", " + randomNumbers(256) + ")",
   "rgb(" + randomNumbers(256) + ", " + randomNumbers(256) + ", " + randomNumbers(256) + ")",
   "rgb(" + randomNumbers(256) + ", " + randomNumbers(256) + ", " + randomNumbers(256) + ")",
   "rgb(" + randomNumbers(256) + ", " + randomNumbers(256) + ", " + randomNumbers(256) + ")",
   "rgb(" + randomNumbers(256) + ", " + randomNumbers(256) + ", " + randomNumbers(256) + ")",
   "rgb(" + randomNumbers(256) + ", " + randomNumbers(256) + ", " + randomNumbers(256) + ")",
  ]
  console.log(colors);
  let matchingColor = colors[Math.floor(Math.random() * Math.floor(difficultyLvl))]
  document.getElementById("set-rgb-color").innerHTML = matchingColor;
    console.log('match', matchingColor);

  for (i = 0; i < difficultyLvl; i++) {
    squares[i].style.backgroundColor = colors[i];
    let currentsquare = squares[i];
  let chosenColor = currentsquare.style.backgroundColor;

    let doStuff = () => {
          console.log('selected',chosenColor);
          console.log('match',matchingColor);
            if(chosenColor !== matchingColor) {
              currentsquare.style.backgroundColor = '#232323';
              paragraph.innerHTML = "Try Again!"
            } else if (chosenColor === matchingColor) {
              console.log('selected',chosenColor);
              console.log('match',matchingColor);
              for (let i = 0; i < difficultyLvl; i++) {
                squares[i].style.backgroundColor = matchingColor;
              }
              titleBackground.classList.add("flashColor");
              document.getElementById("set-rgb-color").style.color = matchingColor;
              paragraph.innerHTML = "Correct!";
              paragraph.style.color = "green";
              newColorButton.innerHTML="Play Again!";
            }
            currentsquare.removeEventListener("click", doStuff);
        }

        currentsquare.addEventListener("click", doStuff)
  }
}

newColorButton.addEventListener("click", function(){
  startNewGame();
  titleBackground.classList.remove("flashColor");
  newColorButton.innerHTML="New Color";
  paragraph.innerHTML = "";
  document.getElementById("set-rgb-color").style.color = "white";
})
