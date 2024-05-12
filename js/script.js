const container = document.querySelector(".container");

function createGrid(container, count) {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "block");
    div.setAttribute("id", i);
    // div.classList.add("pixelated");
    container.appendChild(div);
  }
}

createGrid(container, 256);

const allGrid = document.querySelectorAll(".block");
allGrid.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.classList.add("pixelated");
  });
});
