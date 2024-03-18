import Juego from "./Juego";

describe("Bowling Game Test", () => {
  it("Ejecutando test 1", () => {
    const nuevoJuego = new Juego();
    expect(nuevoJuego).toEqual({});
  });
});

