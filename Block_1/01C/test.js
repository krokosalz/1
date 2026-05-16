// var counter = 0;

// function clickButton(event) {
//   var ausgabe = document.getElementById('ausgabe');

//   ausgabe.innerHTML = event.target.innerHTML;
//   ausgabe.style.color = event.target.dataset.color;
//   ausgabe.style.fontSize = event.target.dataset.size;

//   counter++;

//   console.log("I've been clicked: " + event.target.innerHTML);
//   console.log("Counter: " + counter);
// }

// var buttons = document.getElementsByTagName('button');

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = clickButton;
// }


function clickButton(event) {
  var button = event.target;
  var ausgabe = document.getElementById('ausgabe');

  var counter = Number(button.dataset.counter);
  counter++;
  button.dataset.counter = counter;

  ausgabe.innerHTML = button.innerHTML + " wurde " + counter + "x geklickt.";
  ausgabe.style.color = button.dataset.color;
  ausgabe.style.fontSize = button.dataset.size;

  console.log(button.innerHTML + " wurde geklickt: " + counter);
}

// Ereignisbehandlung initialisieren
var buttons = document.querySelectorAll('button[data-counter]');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = clickButton;
}