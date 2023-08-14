const bodyElem = document.querySelector("body");
const btnElem = document.querySelector("button.change-color");
const spanElem = document.querySelector(".color");

btnElem.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  spanElem.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
