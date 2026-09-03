// src/tenis.test.js
import Tennis from "./tenis.js";

describe("Tennis", () => {
  it("deberia mostrar Love - Love cuando ningun jugador anoto", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });

  it("deberia mostrar 15 - Love cuando el jugador 1 anota 1 vez", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15 - Love");
  });

  it("deberia mostrar 30 - Love cuando el jugador 1 anota 2 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("30 - Love");
  });

  it("deberia mostrar 40 - Love cuando el jugador 1 anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("40 - Love");
  });

  it("deberia mostrar Game for Player 1 cuando el jugador 1 anota 4 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 1");
  });

  it("deberia mostrar Love - 15 cuando el jugador 2 anota 1 vez", () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love - 15");
  });

  it("deberia mostrar Love - 30 cuando el jugador 2 anota 2 veces", () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love - 30");
  });

  it("deberia mostrar Love - 40 cuando el jugador 2 anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Love - 40");
  });

  it("deberia mostrar Game for Player 2 cuando el jugador 2 anota 4 veces", () => {
    let tennis = new Tennis();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Game for Player 2");
  });

  it("deberia mostrar 30 - 15 cuando el jugador 1 anota 2 veces y el jugador 2 anota 1 vez", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("30 - 15");
  });

  it("deberia mostrar Deuce cuando el jugador 1 anota 3 veces y el jugador 2 anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Deuce");
  });

  it("deberia mostrar Advantage for Player 1 cuando el jugador 1 anota 4 veces y el jugador 2 anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Advantage for Player 1");
  });


  it("deberia mostrar Advantage for Player 2 cuando el jugador 1 anota 3 veces y el jugador 2 anota 4 veces", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    expect(tennis.obtenerScore()).toEqual("Advantage for Player 2");
  });


  it("deberia mostrar Game for Player 1 cuando estan en deuce y el jugador 1 anota dos veces seguidas", () => {
    let tennis = new Tennis();
    // Llegar a deuce (3 - 3)
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador1Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();
    tennis.jugador2Anota();

    // Jugador 1 anota dos veces seguidas
    tennis.jugador1Anota();
    tennis.jugador1Anota();

    expect(tennis.obtenerScore()).toEqual("Game for Player 1");
  });
  
});