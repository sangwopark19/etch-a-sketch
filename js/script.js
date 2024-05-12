const container = document.querySelector(".container");

function createGrid(container, count) {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "block");
    div.setAttribute("id", i);
    container.appendChild(div);
  }
}

createGrid(container, 16);
