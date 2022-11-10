let sizeX = 16;
let sizeY = 16;
let grid = new Array(sizeX);

for (var i = 0; i < grid.length; i++) {
  grid[i] = new Array(sizeY);
}

function init() {
  createSettings();
  createGrid(sizeX, sizeY);
}

function createSettings() {
  let settingsWrapper = document.querySelector("#settings-wrapper");

  let buttonGridSize = document.createElement("button");
  buttonGridSize.innerText = "Change Grid Size";
  buttonGridSize.addEventListener("click", function () {
    changeGridSize();
  });
  settingsWrapper.appendChild(buttonGridSize);
}

function createGrid(sizeX, sizeY) {
  let gridWrapper = document.querySelector("#grid-wrapper");

  for (let i = 0; i < sizeX; i++) {
    for (let j = 0; j < sizeY; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", i + "," + j);
      div.classList.add("grid-square");
      div.addEventListener("mouseover", function () {
        div.classList.add("colored-square");
      });
      gridWrapper.appendChild(div);
    }
  }
}

function changeGridSize() {
  let gridWrapper = document.querySelector("#grid-wrapper");

  while (gridWrapper.firstChild) {
    gridWrapper.removeChild(gridWrapper.lastChild);
  }

  let gridSize = prompt("Grid size? (Max size is 100x100)", 16);
  if (gridSize > 100) {
    gridSize = 100;
  }

  gridWrapper.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
  createGrid(gridSize, gridSize);
}

init();
