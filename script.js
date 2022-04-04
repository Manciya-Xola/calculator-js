displayScreen = document.getElementById("display");
function display(value) {
  displayScreen.innerText += value;
  //displayScreen.setAttribute('value',(displayScreen.value+value));
}
function solution() {
  displayScreen.innerText =eval(displayScreen.innerText);
}
function clearScreen() {
  displayScreen.innerText = '';
}
function removeLastEdit() {
  displayScreen.innerText = displayScreen.innerText.slice(0,-1);
}