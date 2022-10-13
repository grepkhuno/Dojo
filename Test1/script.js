var counterVal1 = 0;
var counterVal2 = 0;
var counterVal3 = 0;
function pettingCounter1() {
  var counter = ++counterVal1;
  var numText = document.querySelector("#numOfPettings1");
  numText.innerHTML = counter;
}
function pettingCounter2() {
  var counter = ++counterVal2;
  var numText = document.querySelector("#numOfPettings2");
  numText.innerHTML = counter;
}
function pettingCounter3() {
  var counter = ++counterVal3;
  var numText = document.querySelector("#numOfPettings3");
  numText.innerHTML = counter;
}
function removeBtn(element) {
  element.remove();
}
function catAlert(){
     var x = document.getElementById("animalSel");

    alert("Your are looking for a: "+ x.options[x.selectedIndex].value);
 
 }
