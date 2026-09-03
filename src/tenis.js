// src/tenis.js
class Tennis {
  constructor() {
    this.puntosJ1 = 0;
    this.puntosJ2 = 0;
    this.nombresPuntos = ["Love", "15", "30", "40"];
  }

  jugador1Anota() {
    this.puntosJ1++;
  }

  jugador2Anota() {
    this.puntosJ2++;
  }

  obtenerScore() {
    // 1. Ganador del game (al menos 4 puntos y diferencia de 2)
    if (this.puntosJ1 >= 4 && this.puntosJ1 - this.puntosJ2 >= 2) {
      return "Game for Player 1";
    }
    if (this.puntosJ2 >= 4 && this.puntosJ2 - this.puntosJ1 >= 2) {
      return "Game for Player 2";
    }

    // 2. Empate en 40 o superior (Deuce)
    if (this.puntosJ1 >= 3 && this.puntosJ1 === this.puntosJ2) {
      return "Deuce";
    }

    // 3. Ventajas tras deuce
    if (this.puntosJ1 >= 3 && this.puntosJ2 >= 3) {
      if (this.puntosJ1 - this.puntosJ2 === 1) {
        return "Advantage for Player 1";
      }
      if (this.puntosJ2 - this.puntosJ1 === 1) {
        return "Advantage for Player 2";
      }
    }

    // 4. Marcadores regulares combinados
    return this.nombresPuntos[this.puntosJ1] + " - " + this.nombresPuntos[this.puntosJ2];
  }
}

export default Tennis;