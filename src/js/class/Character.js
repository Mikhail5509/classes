export default class Character {
  constructor (name, type) {
    this.validateName(name);
    this.validateType(type);

    this.name = name;
    this.type = type;
    this.heath = 100;
    this.level = 1;
  }

  validateName(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error ('Имя должно содержать от 2х до 10 символов')
    }
  }

  validateType(type) {
    const validateTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validateTypes.includes(type)) {
      throw new Error('Данный тип не существует');
    }
  }
}

