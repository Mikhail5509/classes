import Magician from "../js/class/Magician";

test('should create a Magician', () => {
  const magician = new Magician('Magician');
  const correct ={
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name:'Magician',
    type:'Magician',
  };
  
  expect(magician).toThrow(correct);
});
