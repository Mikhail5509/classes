import Undead from './Undead';

describe('Undead', () => {
  test('should create a Undead', () => {
    const Undead = new Undead('Aragorn');
    expect(undead.name).toBe('Aragorn');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});
