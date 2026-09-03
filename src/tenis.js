// src/tenis.js
class Tennis {
  constructor() {
    this.puntosJ1 = 0;
    this.puntosJ2 = 0;
  }

  jugador1Anota() {
    this.puntosJ1++;
  }

  jugador2Anota() {
    this.puntosJ2++;
  }

  obtenerScore() {
    if (this.puntosJ1 === 4) {
      return "Game for Player 1";
    }
    if (this.puntosJ1 === 3) {
      return "40 - Love";
    }
    if (this.puntosJ1 === 2) {
      return "30 - Love";
    }
    if (this.puntosJ1 === 1) {
      return "15 - Love";
    }
    return "Love - Love";
  }
}

export default Tennis;