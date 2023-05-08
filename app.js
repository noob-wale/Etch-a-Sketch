let color = 'white';
let mouseClick = true;
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
    square.addEventListener("mouseover", randomColor)
    board.insertAdjacentElement("beforeend", square);
  };
};

function changeGridSize (input) {
    if (input >= 2 && input <= 100) {
        populateGrid(input);
    };
};

function changeColor(myChoice) {
    color = myChoice;
};

function randomColor() {
  if (mouseClick) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;  
    } else {
      this.style.backgroundColor = color;
    };
  };
};

function resetGrid () {
  let board = document.querySelector(".board");
  let grids = board.querySelectorAll("div");
  grids.forEach((div) => div.style.backgroundColor = 'white');
};

document.querySelector('.board').addEventListener('click', () => {
  mouseClick = !mouseClick;
  if (mouseClick) {
    document.querySelector('.coloring-mode').textContent = 'You Are Coloring!';
  } else {
    document.querySelector('.coloring-mode').textContent = 'You are not Coloring!';
  }
})