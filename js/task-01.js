const listElem = document.querySelector("#categories");
console.log(`Number of categories: ${listElem.children.length}`);
const itemElem = listElem.querySelectorAll(".item");

itemElem.forEach((liItem) => {
  const title = liItem.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const itemsList = liItem.querySelectorAll("ul li");
  const totalItems = itemsList.length;
  console.log(`Elements: ${totalItems}`);
});
