const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listElem = document.querySelector("#ingredients");
const ulElem = document.createElement("ul");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  ulElem.append(li);
  li.classList.add("item");
});
console.log(ulElem);
