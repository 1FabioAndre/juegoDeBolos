import Juego from "./Juego";

describe("Bowling Game Test", () => {
  it("Ejecutando test 1", () => {
    const nuevoJuego = new Juego();
    expect(nuevoJuego).toEqual({});
  });

  it("Deberia devolver 20 resultados de 0", () => {
    const nuevoJuego = new Juego();
    for(let i = 0; i < 20; i++){
        nuevoJuego.roll(0);
    }
    expect(nuevoJuego.score()).toEqual(0);
  });
});

