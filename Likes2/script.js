function changeInnerTextTo(element) {
  if (element.innerText == "Logout") {
    element.innerText = "Login";
  } else {
    element.innerText = "Logout";
  }
}
var counterVal1 = 0;
function likeCounter1() {
  var counter = ++counterVal1;
  var numText = document.querySelector("#likeJS1");
  numText.innerHTML = counter;
}
var counterVal2 = 0;
function likeCounter2() {
  var counter = ++counterVal2;
  var numText = document.querySelector("#likeJS2");
  numText.innerHTML = counter;
}
var counterVal3 = 0;
function likeCounter3() {
  var counter = ++counterVal3;
  var numText = document.querySelector("#likeJS3");
  numText.innerHTML = counter;
}