const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
inputElem.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (!inputElem.value) {
      outputElem.textContent = "Anonymous";
    } else {
      outputElem.textContent = inputElem.value;
    }
  }
});
