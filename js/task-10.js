const divElem = document.querySelector("#boxes");
const controlsDiv = document.getElementById("controls");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const amount = parseInt(controlsDiv.querySelector("input").value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    divElem.appendChild(box);
  }
}

function destroyBoxes() {
  divElem.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
