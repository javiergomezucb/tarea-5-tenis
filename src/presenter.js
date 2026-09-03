import Tennis from "./tenis.js";

let juego = new Tennis();

const marcadorDiv = document.querySelector("#marcador");
const btnJugador1 = document.querySelector("#btn-jugador1");
const btnJugador2 = document.querySelector("#btn-jugador2");
const btnReiniciar = document.querySelector("#btn-reiniciar");

function refrescarPantalla() {
  marcadorDiv.textContent = juego.obtenerScore();
}

btnJugador1.addEventListener("click", () => {
  juego.jugador1Anota();
  refrescarPantalla();
});

btnJugador2.addEventListener("click", () => {
  juego.jugador2Anota();
  refrescarPantalla();
});

btnReiniciar.addEventListener("click", () => {
  juego = new Tennis();
  refrescarPantalla();
});