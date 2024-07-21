import Character from "../js/class/character";

test('should create a Character', () => {
  const character = new Character('Character');
  const correct ={
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name:'Character',
    type:'Character',
  };

  expect(character).toThrowError(correct);
});

test('should throw an error if name length is wrong', () => {
  expect(() => new Character('A', 'Bowman')).toThrowError(new Error('Ошибка'));
  expect(() => new Character('AlaricTheGoth', 'Bowman')).toThrowError(new Error('Ошибка'));
});

test('should throw an error if type is wrong', () => {
  expect(() => new Character('Alex', 'Unknown')).toThrowError(new Error('Ошибка'));;
});

test('Проверка работы метода levelUp', () => {
  const character = new Character({ name: 'Test', type: 'Bowerman' });
  expect(character.level).toBe(1);
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(29.999999999999996);
  expect(character.defence).toBeCloseTo(29.999999999999996);
});

test('Проверка ошибки при попытке повысить уровень мертвого персонажа', () => {
  const deadCharacter = new Character({ name: 'Dead', type: 'Undead', health: 0 });
  expect(() => deadCharacter.levelUp()).toThrow();
});

test('Проверка работы метода damage', () => {
  const swordsman = new swordsman({ name: 'Warrior', type: 'Swordsman' });
  swordsman.damage(20);
  expect(swordsman.health).toBeCloseTo(80);
});