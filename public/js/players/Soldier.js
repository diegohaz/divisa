var letterReflections = ['map1', 'rat2', 'wall3', 'soldiers4', 'dogtag5', 'window6'];

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
  wall1: 'Nós jamais depredaríamos nossa terra.',
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




  // Moment 2 Scene 1
  map2: 'Esse povo ocupou a nossa terra e nós estamos tomando de volta.',
  weapons2: 'É incrível o estrago que essas coisas podem fazer…',
  window2: 'Eles quebram tudo que vêem pela frente.',
  stone2: 'Eles acham que podem nos atacar com isso?',
  table2: 'Aqui eles são como formigas para nós.',
  commander2: 'O comandante é um exímio estrategista.',

  // Moment 2 Scene 2
  children2: 'De onde veio aquela boneca?',
  rat2: 'Ratos. São traiçoeiros como eles.',
  light2: 'Pelo menos eles têm luz.',

  // Moment 2 Scene 3
  wall2: 'A opinião deles é tão… errada.',
  family2: 'Eles estão sofrendo as consequências de seus atos.',
  house2: 'Não temos opção a não ser invadir suas casas.',

  // Moment 2 Scene 4
  tents2: 'É aqui que passamos as nossas noites.',
  soldiers2: 'Perdemos um aliado para nossos inimigos hoje.',
  car2: 'Eles são rápidos, mas não mais do que nós.',
  crates2: 'Estamos mais bem preparados, de certo venceremos. ',

  // Moment 2 Scene 5
  dogtag2: 'Eles nunca deveriam ter feito isso com você.',
  diary2: 'Não posso perder tempo escrevendo',




  // Moment 3 Scene 1
  map3: 'Estamos indo rápido… demais, talvez.',
  weapons3: 'É incrível o estrago que estamos fazendo com isso…',
  window3: 'Não fomos nós que quebramos isso?',
  stone3: 'Deveríamos jogar a pedra de volta…',
  table3: 'E se eu tivesse nascido do outro lado da fronteira?',
  commander3: 'Será que não estamos confiando demais em uma só pessoa?',

  // Moment 3 Scene 2
  children3: 'Hoje parece bem mais vazio do que da última vez que vi...',
  rat3: 'Este lugar é tão sujo...',
  light3: 'Eu, estranhamente, me identifico com essa lâmpada.',

  // Moment 3 Scene 3
  wall3: 'É um constante conflito de ideologias.',
  family3: 'Eu nunca mais vi aquela criança que andava com eles...',
  house3: 'Eu não faço ideia de como eu reagiria se tomassem minha casa...',

  // Moment 3 Scene 4
  tents3: 'Não há muito tempo para descanso...',
  soldiers3: 'São sobreviventes de guerra...',
  car3: 'Será que algum dia verei minha família novamente?',
  crates3: 'Ainda assim temos mais do que eles...',

  // Moment 3 Scene 5
  dogtag3: 'Sinto sua falta. Também sinto que muitos sentem o mesmo.',
  diary3: 'Não estou me sentindo bem para escrever…',




  // Moment 4 Scene 1
  map4: 'Eles estão quase sem terras…',
  weapons4: 'Será que eles precisavam mesmo ir à luta?',
  window4: 'Qual seria o motivo deles para fazer isso?',
  stone4: 'Eles só podem usar suas armas uma única vez…',
  table4: 'E se eles tivessem nascido do lado de cá?',
  commander4: 'Será que o comandante deles é feroz como o nosso?',

  // Moment 4 Scene 2
  children4: 'Mais uma criança não aguentou...',
  light4: 'Será que essa lâmpada causa pesadelos neles?',

  // Moment 4 Scene 3
  wall4: 'Será que alguém realmente tem a resposta do que é certo?',
  family4: 'Eles estão sofrendo as consequências da guerra...',
  house4: 'Para onde será que foi a família que morava aqui?',

  // Moment 4 Scene 4
  tents4: 'Será que eles tem um lar para voltar?',
  soldiers4: 'Quantos homens será que eles também perderam?',
  car4: 'O que eles fariam se tivessem um?',
  crates4: 'Ainda assim temos mais do que eles...será que passam muita fome?',

  // Moment 4 Scene 5
  dogtag4: 'A morte é inerente à guerra, de qualquer um dos lados.',
  diary4: 'Como eu descreveria uma divisa dentro de mim?',




  // Moment 5 Scene 1
  map5: 'Divisa… conquistamos muito, mas sobrou tão pouco.',
  weapons5: 'Quanta destruição um objeto como este pode fazer...',
  window5: 'As coisas não estão indo bem lá fora…',
  stone5: 'O que eu faria se tivesse somente pedras?',
  table5: 'É, eu, e qualquer um poderíamos ter nascido do outro lado da fronteira...',
  commander5: 'Os ideais dele são os meus?',

  // Moment 5 Scene 2
  children5: 'A vida delas nunca mais será a mesma...',
  light5: 'Essas crianças estão vivendo um pesadelo.',

  // Moment 5 Scene 3
  wall5: 'Eu nunca pichei, mas acho que entendo a necessidade de quem fez isso...',
  family5: 'Eu sequer consigo me colocar no lugar dessas pessoas dessa família...',
  house5: 'Eu gostaria muito de acreditar que a família que morava aqui está bem...',

  // Moment 5 Scene 4
  tents5: 'Sinto falta de um lar de verdade...',
  soldiers5: 'Perdi muitos companheiros...eles também...',
  car5: 'Tenho certeza que Ford não envisionou nada disso.',
  crates5: 'Está tudo se esvaindo…',

  // Moment 5 Scene 5
  dogtag5: 'Definitivamente, todos sofrem com a guerra.',
  diary5: 'Eu amo escrever, talvez eu devesse…',





  // Moment 6 Scene 1
  map6: 'Alcançamos nossos objetivos… mas a que custo?',
  weapons6: 'Eu tenho certeza que quem inventou as armas não envisionou nosso presente...',
  window6: 'Deveríamos poder apreciar esta vista juntos.',
  stone6: 'Nós temos armas, eles só têm pedras…',
  table6: 'Quantos deles ainda estão vivos?',
  commander6: 'O que ele representa não necessariamente é o melhor para todos...',

  // Moment 6 Scene 2
  children6: 'Não aguento mais vê-las assim...',
  rat6: 'Até este rato merece viver em paz...',
  light6: 'Eu queria muito que uma luz os guiasse...',

  // Moment 6 Scene 3
  wall6: 'O que importa é que ele expressou sua opinião.',
  family6: 'Nenhuma mãe merece passar pelo que essa está passando...',
  house6: 'Isso não pode continuar.',

  // Moment 6 Scene 4
  tents6: 'Somos todos vizinhos, devíamos partilhar nosso lar.',
  soldiers6: 'Estou tão sozinho quanto esse cara.',
  car6: 'Isso não pode continuar assim.',
  crates6: 'Esta vida não se sustenta...ninguém deve viver assim.',

  // Moment 6 Scene 5
  dogtag6: 'Boa noite, querido amigo.',
  bed6: 'Hoje estou com vontade de escrever…',
  diary6: 'Vou voltar a escrever.',
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