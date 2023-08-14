const inputControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputControl.addEventListener("input", () => {
  const fontSize = inputControl.value + "px";
  textSize.style.fontSize = fontSize;
});
