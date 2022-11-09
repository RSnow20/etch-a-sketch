let sizeX = 16;
let sizeY = 16;
let grid = new Array(sizeX);

for (var i = 0; i < grid.length; i++) {
  grid[i] = new Array(sizeY);
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

createGrid(sizeX, sizeY);
