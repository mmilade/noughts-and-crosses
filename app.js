
// const styleBody = () => {
//   document.body.style.border = "1px solid black";
//   document.body.style.boxSizing = "border-box";
//   document.body.style.width = "90%";
//   document.body.style.height = "800px";
// }


const createGrid = () => {
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.style.border = "1px solid black";
    // box.style.width = "5%";
    // box.style.height = "5%";
    // box.style.padding = "10px"
    // box.style.margin = "10px";
    box.id = i;
    box.innerHTML = i;
    // box.style.backgroundColor = red; ---> why is this not working but css is?
    console.log(box);
    document.getElementsByTagName("main")[0].appendChild(box);
  }
}



const drawBoard = () => {
  // styleBody();
  createGrid();


}


window.onload = drawBoard();