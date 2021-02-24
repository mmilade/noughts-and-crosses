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
let player1Turn = true;

const createGrid = () => {
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.style.border = "1px solid black";
    box.id = i;
    // box.innerHTML = i;
    box.style.backgroundColor = "rgb(154, 154, 207)";
    // console.log(box);
    middleContainer.appendChild(box);
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
  const box = document.querySelectorAll(".middle > div")
  for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", () => {
      if (player1Turn) {
        player1.style.backgroundColor = "rgb(154, 154, 207)"
        player2.style.backgroundColor = "yellow"
        box[i].style.backgroundColor = "black";
        box[i].style.color = "#33ccff";
        box[i].style.textAlign = "center";
        box[i].style.fontSize = "50pt";
        box[i].style.display = "flex";
        box[i].style.alignItems = "center";
        box[i].style.justifyContent = "center";
        box[i].innerHTML = "X";
        player1Turn = !player1Turn;
        // player1.innerHTML += " 1"
        bottomContainer.innerHTML = `Next turn: ${player2.innerHTML}'s`
      } else {
        player2.style.backgroundColor = "rgb(154, 154, 207)"
        player1.style.backgroundColor = "yellow"
        box[i].style.backgroundColor = "black";
        box[i].style.color = "#33ccff";
        box[i].style.textAlign = "center";
        box[i].style.fontSize = "50pt";
        box[i].style.display = "flex";
        box[i].style.alignItems = "center";
        box[i].style.justifyContent = "center";
        box[i].innerHTML = "O";
        player1Turn = !player1Turn;
        // player2.innerHTML += " 2"
        bottomContainer.innerHTML = `Next turn: ${player1.innerHTML}'s`

      }
    })
  }
}


const winner = () => {
  bottomContainer.innerHTML = ""
}

const drawBoard = () => {
  createGrid();
  getPlayerName();
  gamePlay();
  // winner();


}

drawBoard();
// window.onload = drawBoard();


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