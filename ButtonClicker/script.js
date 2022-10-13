var counterVal = 0;

function changeInnerTextTo(element) {
  if (element.innerText == "Logout") {
    element.innerText = "Login";
  } else {
    element.innerText = "Logout";
  }
}

function likeCounter() {
  var counter =++counterVal;
  var numText = document.querySelector("#numOfLikes");
  numText.innerHTML = counter;
}
function removeBtn(element) {
  element.remove();
}
