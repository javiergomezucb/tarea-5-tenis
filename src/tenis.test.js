import Tennis from "./tenis.js";

describe("Tennis", () => {
  it("deberia mostrar Love - Love cuando ningun jugador anoto", () => {
    let tennis = new Tennis();
    expect(tennis.obtenerScore()).toEqual("Love - Love");
  });

 it("deberia mostrar 15 - Love cuando el jugador 1 anota una vez", () => {
    let tennis = new Tennis();
    tennis.jugador1Anota();
    expect(tennis.obtenerScore()).toEqual("15 - Love");
  });

});