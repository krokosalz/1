function zeigeUebersicht() {
  var buttons = document.querySelectorAll('button[data-counter]');
  var uebersicht = document.getElementById('uebersicht');

  var text = "Klick-Übersicht:\n\n";

  for (var i = 0; i < buttons.length; i++) {
    text += buttons[i].innerHTML + ": " + buttons[i].dataset.counter + " Klicks\n";
  }

  uebersicht.innerHTML = text;

  console.log(text);
}