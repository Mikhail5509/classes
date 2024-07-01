import Magician from "../js/class/character";

describe('Magician', () => {
  test('should create a Magician', () => {
    const magician = new Magician('Aragorn');
    expect(magician.name).toBe('Aragorn');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});
