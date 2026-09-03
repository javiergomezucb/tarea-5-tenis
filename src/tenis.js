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
    if (this.puntosJ2 === 4) {
      return "Game for Player 2";
    }

    if (this.puntosJ1 === 2 && this.puntosJ2 === 1) {
      return "30 - 15";
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

    if (this.puntosJ2 === 3) {
      return "Love - 40";
    }
    if (this.puntosJ2 === 2) {
      return "Love - 30";
    }
    if (this.puntosJ2 === 1) {
      return "Love - 15";
    }

    return "Love - Love";
  }
}

export default Tennis;