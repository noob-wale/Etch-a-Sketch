
// This function populates the board with the number of size input by the user
function populateGrid(size) {
  let board = document.querySelector(".board");
  let grids = board.querySelectorAll("div");
  grids.forEach((div) => remove(div));
  board.style.gridTemplateColumns = `repeat(${size}, 1fr )`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr )`;

  let gSize = size * size;

  for (let i = 0; i < gSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeGridSize (input) {
    if (input >= 2 && input <= 100) {
        populateGrid(input);
    };
};