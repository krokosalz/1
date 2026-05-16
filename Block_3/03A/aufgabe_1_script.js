let buttons = document.querySelectorAll(".btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "lightblue";
        
        });
        buttons[i].addEventListener("mouseout", function(event) {
            event.target.style.backgroundColor = "lightgray";
        });
    }
// let buttons = document.querySelectorAll(".btn");

// let emojis = [
//   "🤡","💩", "♿", "🖕"
// ];

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].dataset.x = 0;
//   buttons[i].dataset.y = 0;

//   buttons[i].addEventListener("mouseover", function(event) {
//     let button = event.target;

//     // Alte sichtbare Position vom Button merken
//     let rect = button.getBoundingClientRect();

//     // Zufälliges Emoji auswählen
//     let zufall = Math.floor(Math.random() * emojis.length);

//     // Emoji an der alten Position anzeigen
//     let emoji = document.createElement("div");
//     emoji.className = "emoji";
//     emoji.innerHTML = emojis[zufall];
//     emoji.style.left = rect.left + "px";
//     emoji.style.top = rect.top + "px";

//     document.body.appendChild(emoji);

//     // Emoji nach kurzer Zeit wieder entfernen
//     setTimeout(function() {
//       emoji.remove();
//     }, 500);

//     // Aktuelle Verschiebung lesen
//     let currentX = Number(button.dataset.x);
//     let currentY = Number(button.dataset.y);

//     // Ursprüngliche Position berechnen
//     let originalLeft = rect.left - currentX;
//     let originalTop = rect.top - currentY;

//     // Grenzen des Fensters berechnen
//     let maxLeft = window.innerWidth - rect.width - 10;
//     let maxTop = window.innerHeight - rect.height - 10;

//     // Neue zufällige Position im sichtbaren Fenster
//     let newLeft = Math.floor(Math.random() * maxLeft);
//     let newTop = Math.floor(Math.random() * maxTop);

//     // Neue Verschiebung berechnen
//     let moveX = newLeft - originalLeft;
//     let moveY = newTop - originalTop;

//     // Neue Verschiebung speichern
//     button.dataset.x = moveX;
//     button.dataset.y = moveY;

//     // Button flüchtet
//     button.style.transform = "translate(" + moveX + "px, " + moveY + "px)";

//     // Hover-Effekt bleibt gleich
//     button.style.backgroundColor = "lightblue";
//   });

//   buttons[i].addEventListener("mouseout", function(event) {
//     event.target.style.backgroundColor = "lightgray";
//   });
// }