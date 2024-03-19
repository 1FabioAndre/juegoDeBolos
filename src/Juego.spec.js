
import Juego from './Juego'; 

describe('BowlingGameTest', () => {
  let g;

  beforeEach(() => {
    g = new Juego(); // Crear Variable antes de cada prueba
  });

  const rollMany = (n, pins) => { // Auxiloar para multiples lazamientos
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  };

  const rollSpare = () => { // Spare
    g.roll(5);
    g.roll(5);
  };

  const rollStrike = () => {
    g.roll(10);
  }

  it('Juego sin puntuacion', () => { 
    rollMany(20, 0); // Lanzando 20 veces con 0 pines
    expect(g.score()).toEqual(0); 
  });

  it('Deberia devolver 20', () => { // Prueba para un juego con todos los lanzamientos de 1
    rollMany(20, 1); // Lanzando 20 veces con 1 pin en cada lanzamiento
    expect(g.score()).toEqual(20); 
  });

  it('Probando un juego con un spare', () => { // Prueba para un juego con un spare
    rollSpare(); // Spare
    g.roll(3); // Lanzamiento de 3 
    rollMany(17, 0); // Lanzando 17 veces con 0 pines
    expect(g.score()).toEqual(16);
  });

  it('Deberia calcular el score con un strike', () => {
    // g.roll(10); // Strike
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toEqual(24);
  });
});
