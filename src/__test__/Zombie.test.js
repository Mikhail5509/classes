import Zombie from './Zombie';

describe('Zombie', () => {
  test('should create a Zombie', () => {
    const zombie = new zombie('Aragorn');
    expect(zombie.name).toBe('Aragorn');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
