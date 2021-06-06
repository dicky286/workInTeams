arr = ["Mike", "Sel", "John", "Michael"];
arr.forEach(function (item) {
  let newPara = document.createElement("p");
  newPara.innerText = item;
  parentDiv = document.querySelector(".description");
  parentDiv.appendChild(newPara);
});
