var Reflection = require('/js/Reflection');
var Inspiration = require('/js/Inspiration');
var Scene = require('/js/Scene');
var Moment = require('/js/Moment');

// Scenes
var s = [];
for (var i = 0; i < 2; i++) s[i] = [];

// Moment 1 Scene 1
s[0][0] = new Scene('scene1');
s[0][0].zoom = 1;
s[0][0].inspirations = [
  new Inspiration('map1', 'Mapa', new Reflection('Divisa... Isso tudo será nosso em breve.')),
  new Inspiration('weapons1', 'Armas', new Reflection('Às vezes, é necessário fazer uso de força para alcançar nossos objetivos…')),
  new Inspiration('window1', 'Janela', new Reflection('É sempre bom ter uma vista para o lado de fora...')),
  new Inspiration('table1', 'Mesa', new Reflection('O plano deve ser bem executado para alcançarmos êxito.')),
  new Inspiration('commander1', 'Comandante', new Reflection('Comandante', 'Este é o homem que nos levará a vitória.'))
];
// Moment 1 Scene 2
s[0][1] = new Scene();
s[0][1].zoom = .667;
s[0][1].inspirations = [
  new Inspiration('children1', 'Crianças', new Reflection('Às vezes temos que remover as pedras do caminho...')),
  new Inspiration('rat1', 'Rato', new Reflection('Eu odeio ratos.')),
  new Inspiration('light1', 'Lâmpada', new Reflection('Me surpreende a energia chegar até aqui.'))
];
// Moment 1 Scene 3
s[0][2] = new Scene();
s[0][2].zoom = .333;
s[0][2].inspirations = [
  new Inspiration('graffiti1', 'Pichação', new Reflection('Nós jamais depredaríamos nossa terra.')),
  new Inspiration('family1', 'Família', new Reflection('Em breve eu e meu povo estaremos aqui.')),
  new Inspiration('house1', 'Casa', new Reflection('Aqui vai ser minha casa de veraneio quando conquistarmos tudo.'))
];
// Moment 1 Scene 4
s[0][3] = new Scene();
s[0][3].zoom = .667;
s[0][3].inspirations = [
  new Inspiration('tents1', 'Barracas', new Reflection('Esta é a minha casa, estes são meus vizinhos, não eles.')),
  new Inspiration('soldiers1', 'Soldados', new Reflection('Homens corajosos, lutando pela nossa causa.')),
  new Inspiration('car1', 'Jipe', new Reflection('Veloz e mortal...')),
  new Inspiration('crates1', 'Caixotes', new Reflection('São nossos mantimentos.'))
];
// Moment 1 Scene 5
s[0][4] = new Scene();
s[0][4].zoom = 1;
s[0][4].inspirations = [
  new Inspiration('dogtag1', 'Dogtag', new Reflection('Eles são uns monstros de terem feito isso com você.')),
  new Inspiration('bed1', 'Cama', ''),
  new Inspiration('diary1', 'Diário', new Reflection('Quem pensa em escrever com tanta raiva?')),
  new Inspiration('calendar1', 'Calendário', new Reflection('Hoje foi o primeiro dia do processo de conquista.'))
];


// Moment 2 Scene 1
s[1][0] = new Scene();
s[1][0].zoom = 1;
s[1][0].inspirations = [
  new Inspiration('map1', 'Mapa', new Reflection('Divisa... Isso tudo será nosso em breve.')),
  new Inspiration('weapons1', 'Armas', new Reflection('Às vezes, é necessário fazer uso de força para alcançar nossos objetivos…')),
  new Inspiration('window1', 'Janela', new Reflection('É sempre bom ter uma vista para o lado de fora...')),
  new Inspiration('table1', 'Mesa', new Reflection('O plano deve ser bem executado para alcançarmos êxito.')),
  new Inspiration('commander1', 'Comandante', new Reflection('Este é o homem que nos levará a vitória.'))
];
// Moment 2 Scene 2
s[1][1] = new Scene();
s[1][1].zoom = .667;
s[1][1].inspirations = [
  new Inspiration('children1', 'Crianças', new Reflection('Às vezes temos que remover as pedras do caminho...')),
  new Inspiration('rat1', 'Rato', new Reflection('Eu odeio ratos.')),
  new Inspiration('light1', 'Lâmpada', new Reflection('Me surpreende a energia chegar até aqui.'))
];
// Moment 2 Scene 3
s[1][2] = new Scene();
s[1][2].zoom = .333;
s[1][2].inspirations = [
  new Inspiration('graffiti1', 'Pichação', new Reflection('Nós jamais depredaríamos nossa terra.')),
  new Inspiration('family1', 'Família', new Reflection('Em breve eu e meu povo estaremos aqui.')),
  new Inspiration('house1', 'Casa', new Reflection('Aqui vai ser minha casa de veraneio quando conquistarmos tudo.'))
];
// Moment 2 Scene 4
s[1][3] = new Scene();
s[1][3].zoom = .667;
s[1][3].inspirations = [
  new Inspiration('tents1', 'Barracas', new Reflection('Esta é a minha casa, estes são meus vizinhos, não eles.')),
  new Inspiration('soldiers1', 'Soldados', new Reflection('Homens corajosos, lutando pela nossa causa.')),
  new Inspiration('car1', 'Jipe', new Reflection('Veloz e mortal...')),
  new Inspiration('crates1', 'Caixotes', new Reflection('São nossos mantimentos.'))
];
// Moment 2 Scene 5
s[1][4] = new Scene();
s[1][4].zoom = 1;
s[1][4].inspirations = [
  new Inspiration('dogtag1', 'Dogtag', new Reflection('Eles são uns monstros de terem feito isso com você.')),
  new Inspiration('bed1', 'Cama', ''),
  new Inspiration('diary1', 'Diário', new Reflection('Quem pensa em escrever com tanta raiva?')),
  new Inspiration('calendar1', 'Calendário', new Reflection('Hoje foi o primeiro dia do processo de conquista.'))
];

// Moments
var moments = [];

// Create 6 moments
for (var i = 0; i < s.length; i++) {
  var moment = new Moment();

  for (var j = 0; j < s[i].length; j++) {
    moment.scenes.push(s[i][j]);
  }

  moments.push(moment);
}

module.exports = moments;