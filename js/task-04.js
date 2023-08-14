const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector("#value");
let counterValue = 0;

function updateValue() {
  valueElem.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue--;
  updateValue();
});
incrementButton.addEventListener("click", () => {
  counterValue++;
  updateValue();
});

updateValue();
