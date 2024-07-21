import Zombie from "../js/class/Zombie";

test('should create a Zombie', () => {
  const zombie = new Zombie('Zombie');
  const correct ={
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name:'Zombie',
    type:'Zombie',
  };
  
  expect(zombie).toThrow(correct);
});
