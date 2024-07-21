import Bowman from "../js/class/Bowman";

test('should create a Bowman', () => {
  const bowman = new Bowman('John');
  const correct ={
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name:'Bowman',
    type:'Bowman',
  };
  
  expect(bowman).toThrow(correct);
});