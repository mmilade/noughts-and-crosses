// - A function to draw the grid on the html page
// - A function to take allow the players to put their names?
// - A function to allow the user to fill in the selected space 
// - A function that shows the current score
// - A function that keeps checking if the game is finished > and if so, what was the result?

const topContainer = document.querySelector(".top");
const middleContainer = document.querySelector(".middle");
const bottomContainer = document.querySelector(".bottom");
const player1 = document.getElementById("player1");
const player1Symbol = "X"
const player2Symbol = "O"
let player1Turn = true;

const createGrid = () => {
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.style.border = "1px solid black";
    box.id = i;
    // box.innerHTML = i;
    box.style.backgroundColor = 'red';
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

// const gamePlay = () => {
//   const box = document.querySelectorAll(".middle > div")
//   if (player1Turn) {
//     for (let i = 0; i < 9; i++) {
//       box[i].addEventListener("click", () => {
//         box[i].style.backgroundColor = "black";
//         box[i].style.color = "#33ccff";
//         box[i].style.textAlign = "center";
//         // box[i].style.verticalAlign = "middle";
//         // box[i].style.height = "100%";
//         // box[i].style.lineHeight = "100%"
//         box[i].style.fontSize = "50pt";
//         // box[i].style.padding = "20px 0 0 0"
//         box[i].style.display = "flex";
//         box[i].style.alignItems = "center";
//         box[i].style.justifyContent = "center";
//         box[i].innerHTML = "X";
//       })
//     }
//   } else {
//     for (let i = 0; i < 9; i++) {
//       box[i].addEventListener("click", () => {
//         box[i].style.backgroundColor = "black";
//         box[i].style.color = "#33ccff";
//         box[i].style.textAlign = "center";
//         box[i].style.fontSize = "50pt";
//         box[i].style.display = "flex";
//         box[i].style.alignItems = "center";
//         box[i].style.justifyContent = "center";
//         box[i].innerHTML = "O";
//       })
//     }
//   }
// }


const gamePlay = () => {
  const box = document.querySelectorAll(".middle > div")
  for (let i = 0; i < 9; i++) {
    
    if (player1Turn) {
        box[i].addEventListener("click", () => {
        box[i].style.backgroundColor = "black";
        box[i].style.color = "#33ccff";
        box[i].style.textAlign = "center";
        box[i].style.fontSize = "50pt";
        box[i].style.display = "flex";
        box[i].style.alignItems = "center";
        box[i].style.justifyContent = "center";
        box[i].innerHTML = "X";
        })
      } else {
        box[i].addEventListener("click", () => {
          box[i].style.backgroundColor = "black";
          box[i].style.color = "#33ccff";
          box[i].style.textAlign = "center";
          box[i].style.fontSize = "50pt";
          box[i].style.display = "flex";
          box[i].style.alignItems = "center";
          box[i].style.justifyContent = "center";
          box[i].innerHTML = "O";
          })
      }
      player1Turn = !player1Turn;
  
  }
}


const winner = () => {
  bottomContainer.innerHTML = "Player 1 won!"
}

const drawBoard = () => {
  createGrid();
  getPlayerName();
  gamePlay();
  winner();


}

drawBoard();
// window.onload = drawBoard();