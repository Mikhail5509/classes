import Daemon from './Daemon';

describe('Daemon', () => {
  test('should create a Daemon', () => {
    const daemon = new Daemon('Aragorn');
    expect(daemon.name).toBe('Aragorn');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});
