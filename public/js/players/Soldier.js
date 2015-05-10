var letterReflections = ['map1'];

var reflections = {
  // Moment 1 Scene 1
  map1: 'Divisa... Isso tudo será nosso em breve.',
  weapons1: 'Às vezes, é necessário fazer uso de força para alcançar nossos objetivos…',
  window1: 'É sempre bom ter uma vista para o lado de fora...',
  table1: 'O plano deve ser bem executado para alcançarmos êxito.',
  commander1: 'Este é o homem que nos levará a vitória.',

  // Moment 1 Scene 2
  children1: 'Às vezes temos que remover as pedras do caminho...',
  rat1: 'Eu odeio ratos.',
  light1: 'Me surpreende a energia chegar até aqui.',

  // Moment 1 Scene 3
  graffiti1: 'Nós jamais depredaríamos nossa terra.',
  family1: 'Em breve eu e meu povo estaremos aqui.',
  house1: 'Aqui vai ser minha casa de veraneio quando conquistarmos tudo.',

  // Moment 1 Scene 4
  tents1: 'Esta é a minha casa, estes são meus vizinhos, não eles.',
  soldiers1: 'Homens corajosos, lutando pela nossa causa.',
  car1: 'Veloz e mortal...',
  crates1: 'São nossos mantimentos.',

  // Moment 1 Scene 5
  dogtag1: 'Eles são uns monstros de terem feito isso com você.',
  diary1: 'Quem pensa em escrever com tanta raiva?',
  calendar1: 'Hoje foi o primeiro dia do processo de conquista.'
}

var Reflection = require('/js/Reflection');
var Player = require('/js/players/Player');

function Soldier() {}
Soldier.prototype = new Player('soldier');

for (id in reflections) {
  var reflection = new Reflection(reflections[id], ~letterReflections.indexOf(id));
  Soldier.prototype.reflections[id] = reflection;
}

module.exports = Soldier;