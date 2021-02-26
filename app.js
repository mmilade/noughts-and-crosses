// - A function to draw the grid on the html page
// - A function to take allow the players to put their names?
// - A function to allow the user to fill in the selected space 
// - A function that shows the current score
// - A function that keeps checking if the game is finished > and if so, what was the result?

const topContainer = document.querySelector(".top");
const middleContainer = document.querySelector(".middle");
const bottomContainer = document.querySelector(".bottom");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player1Symbol = "X"
const player2Symbol = "O"
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let gameOver = false;
let isItDraw = false;
noOfFilledBoxes = 0;
let box = []


const createGrid = () => {
  for (let i = 0; i < 9; i++) {
    const gridBox = document.createElement("div");
    gridBox.style.border = "1px solid black";
    gridBox.id = i;
    // box.innerHTML = i;
    gridBox.style.backgroundColor = "rgb(154, 154, 207)";
    // console.log(box);
    middleContainer.appendChild(gridBox);
  }
}

const getPlayerName = () => {
  
  player1.addEventListener("click", () => {
    player1.innerHTML = prompt("Please enter your name")
  })

  player2.addEventListener("click", () => {
    player2.innerHTML = prompt("Please enter your name")
  })

}


const gamePlay = () => {
  bottomContainer.innerHTML = `${player1.innerHTML} please start...`
  box = document.querySelectorAll(".middle > div")
  for (let i = 0; i < 9; i++) {

      box[i].addEventListener("click", () => {

        if (gameOver === true) {
          console.log(gameOver);
          return;
        } 

        if (player1Turn) {

          if (box[i].innerHTML == "") {
          player1.style.backgroundColor = "rgb(154, 154, 207)"
          player2.style.backgroundColor = "#33ccff"
          box[i].style.backgroundColor = "black";
          box[i].innerHTML = "X";
          noOfFilledBoxes += 1;
          player1Turn = !player1Turn;
          bottomContainer.innerHTML = `Next turn: ${player2.innerHTML}`
          winner();
          console.log(noOfFilledBoxes);
          postDrawMessage();
          }

          
        } else if (box[i].innerHTML == "") {
          player2.style.backgroundColor = "rgb(154, 154, 207)"
          player1.style.backgroundColor = "#33ccff"
          box[i].style.backgroundColor = "black";
          box[i].innerHTML = "O";
          noOfFilledBoxes += 1;
          player1Turn = !player1Turn;
          bottomContainer.innerHTML = `Next turn: ${player1.innerHTML}`
          winner();
          console.log(noOfFilledBoxes);
          postDrawMessage();
        }

      })
    
  }
  console.log(box);
}


const winner = () => {
  if (
         (box[0].innerHTML!=="" && box[0].innerHTML==box[1].innerHTML && box[0].innerHTML==box[2].innerHTML)
      || (box[3].innerHTML!=="" && box[3].innerHTML==box[4].innerHTML && box[3].innerHTML==box[5].innerHTML)
      || (box[6].innerHTML!=="" && box[6].innerHTML==box[7].innerHTML && box[6].innerHTML==box[8].innerHTML)
      || (box[0].innerHTML!=="" && box[0].innerHTML==box[3].innerHTML && box[0].innerHTML==box[6].innerHTML)
      || (box[1].innerHTML!=="" && box[1].innerHTML==box[4].innerHTML && box[1].innerHTML==box[7].innerHTML)
      || (box[2].innerHTML!=="" && box[2].innerHTML==box[5].innerHTML && box[2].innerHTML==box[8].innerHTML)
      || (box[0].innerHTML!=="" && box[0].innerHTML==box[4].innerHTML && box[0].innerHTML==box[8].innerHTML)
      || (box[2].innerHTML!=="" && box[2].innerHTML==box[4].innerHTML && box[2].innerHTML==box[6].innerHTML)
      ) {

        if (player1Turn) {
          player2Score += 1;
          bottomContainer.innerHTML = `${player2.innerHTML} Won. Current score >>>  ${player1.innerHTML}: ${player1Score} and ${player2.innerHTML}: ${player2Score}`
          player1.style.backgroundColor = "rgb(154, 154, 207)"
          player2.style.backgroundColor = "yellow"
        } else {
          player1Score += 1;
          bottomContainer.innerHTML = `${player1.innerHTML} Won. Current score >>>  ${player1.innerHTML}: ${player1Score} and ${player2.innerHTML}: ${player2Score}`
          player2.style.backgroundColor = "rgb(154, 154, 207)"
          player1.style.backgroundColor = "yellow"
        }

      gameOver = true;
      isItDraw = false;
      console.log(gameOver);
      disableGrid();
  } else {

  }
}


const postDrawMessage = () => {

  if (noOfFilledBoxes === 9) {
    isItDraw = true;
    player1.style.backgroundColor = "#33ccff"
    player2.style.backgroundColor = "#33ccff"
    bottomContainer.innerHTML = `DRAW - Current score >>>  ${player1.innerHTML}: ${player1Score} and ${player2.innerHTML}: ${player2Score}`
    continueGame();
  }
}


const disableGrid = () => {
  for (let i = 0; i < 9; i++) {

    if (box[i].innerHTML == "") {
      box[i].style.backgroundColor = "gray";
      box[i].style.border = "1px solid gray";
    }     

  }

  continueGame();
}


const continueGame = () => {

  bottomContainer.innerHTML = `${bottomContainer.innerHTML}` +  "<br>" + "<br>" + "Double click here to start a new game";

  bottomContainer.addEventListener("dblclick", () => {
    bottomContainer.innerHTML = "starting a new game";
    gameOver = false;
    player1Turn = true;
    noOfFilledBoxes = 0;
    clearGrid();
    startGame();
  })

}

const clearGrid = () => {

  while (middleContainer.firstChild) {
    middleContainer.removeChild(middleContainer.lastChild)
  }

}

const startGame = () => {
  createGrid();
  getPlayerName();
  gamePlay();

}

startGame();


// archives
// const gamePlay = () => {
//   const box = document.querySelectorAll(".middle > div")
//   // let player1Turn = true;
//   for (let i = 0; i < 9; i++) {
    
//     if (player1Turn) {
//         box[i].addEventListener("click", () => {
//           box[i].style.backgroundColor = "black";
//           box[i].style.color = "#33ccff";
//           box[i].style.textAlign = "center";
//           box[i].style.fontSize = "50pt";
//           box[i].style.display = "flex";
//           box[i].style.alignItems = "center";
//           box[i].style.justifyContent = "center";
//           box[i].innerHTML = "X";
//           console.log("inside if - bfore changing " + player1Turn);
//           // player1Turn = !player1Turn;
//           console.log("inside if - after changing " + player1Turn);
//         })
//       } else {
//         box[i].addEventListener("click", () => {
//           box[i].style.backgroundColor = "black";
//           box[i].style.color = "#33ccff";
//           box[i].style.textAlign = "center";
//           box[i].style.fontSize = "50pt";
//           box[i].style.display = "flex";
//           box[i].style.alignItems = "center";
//           box[i].style.justifyContent = "center";
//           box[i].innerHTML = "O";
//           console.log(player1Turn);
//           console.log("inside else - bfore changing " + player1Turn);
//           // player1Turn = !player1Turn;
//           console.log("inside else - after changing " + player1Turn);
//         })
//       }
//       console.log("outside if - bfore changing " + player1Turn);
//       player1Turn = !player1Turn;
//       console.log("outside if - after changing " + player1Turn);
//   }
//   // player1Turn = !player1Turn;
// }