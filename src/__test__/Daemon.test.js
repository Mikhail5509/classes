import Daemon from "../js/class/Daemon";

test('should create a Daemon', () => {
  const daemon = new Daemon('Daemon');
  const correct ={
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name:'Daemon',
    type:'Daemon',
 };

  expect(daemon).toThrow(correct);
});