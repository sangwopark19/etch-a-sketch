const container = document.querySelector(".container");

function createGrid(container, count) {
  let squares = count * count;
  for (let i = 0; i < squares; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "block");
    div.setAttribute("id", i);
    div.setAttribute("style", `flex:1 1 ${100 / count}%`);
    // div.classList.add("pixelated");
    container.appendChild(div);
  }
  addHoverEvent();
}

function addHoverEvent() {
  const allGrid = document.querySelectorAll(".block");
  allGrid.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.classList.add("pixelated");
    });
  });
}

const padBtn = document.querySelector(".pad-btn");

padBtn.addEventListener("click", () => {
  let squaresNum;
  while (true) {
    squaresNum = prompt(
      "새 그리드의 측면당 사각형 수를 알려주세요. 최대 크기는 100 입니다."
    );
    if (squaresNum === null) {
      alert("취소 하셨습니다");
      break;
    }
    if (squaresNum === "" || !Number.isInteger(+squaresNum)) {
      alert("잘못 입력 하셨습니다 다시 입력해주세요.");
      continue;
    }
    squaresNum = +squaresNum;
    if (squaresNum > 100) {
      alert("100이하로 입력해주세요.");
      continue;
    }
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    createGrid(container, squaresNum);
    break;
  }
});

createGrid(container, 16);
