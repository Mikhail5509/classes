import Character from './Character';

describe('Character', () => {
  test('should create an instance of Character', () => {
    const character = new Character('Alex', 'Bowman');
    expect(character.name).toBe('Alex');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  test('should throw an error if name length is wrong', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with 2 to 10 characters.');
    expect(() => new Character('AlaricTheGoth', 'Bowman')).toThrow('Name must be a string with 2 to 10 characters.');
  });

  test('should throw an error if type is wrong', () => {
    expect(() => new Character('Alex', 'Unknown')).toThrow('Invalid type.');
  });
});
