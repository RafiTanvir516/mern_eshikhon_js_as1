
//   question 1

  document.title = "Document Object Model"

//   question 2
const pElm = document.createElement("div");
pElm.innerHTML = "<p><strong>This is p tag</strong></p>"
const divelm = document.querySelector("#head");
divelm.appendChild(pElm)
