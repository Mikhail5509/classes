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
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {}
       else { throw new Error('Ошибка')}
  }

  validateType(type) {
    const validateType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validateType.includes(type)) {}
    else {throw new Error('Ошибка');
    }
  }
  
  

  levelUp() {
    if (this.health === 0) {
      throw new Error('Уровень нельзя повысить, если здоровье равно 0');
    }
    this.level += 1;
    this.attack  *= 1.2;
    this.defence  *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      return;
    }
    this.health -= points  *  (1 - this.defence / 100);
  }
}
