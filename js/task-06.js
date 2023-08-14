const inputElem = document.querySelector("#validation-input");
const dataLength = parseInt(inputElem.getAttribute("data-length"));

inputElem.addEventListener("blur", (event) => {
  const inputValueLength = inputElem.value.length;
  inputElem.classList.remove("invalid", "valid");

  if (inputValueLength === dataLength) {
    inputElem.classList.add("valid");
  } else {
    inputElem.classList.add("invalid");
  }
});
