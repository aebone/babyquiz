/***********************************************/
/******** MEU BABY QUER QUIZ (BAD) CODE ********/
/***********************************************/
/***********************************************/

function nivelA()
{
  // FORÇAR A RESPONDER ( forceAnswer: true )
  // Zerando o scoreA
  window.scoreA = 0;

  function showAnswerAlert()
  {
    document.id('error').set('html', 'Você precisa escolher uma resposta.');
  }

  function showScore() {
   var score = babyQuiz.getScore();

   var el = new Element('h2');
   el.set('html','Você fez ' + score.numCorrectAnswers + " pontos.");
   document.id('result').adopt(el);

   if(score.numCorrectAnswers === 10)
   {
    el = new Element('h3');
    el.set('html', 'Uau! Você foi muito bem, nos vemos no próximo nível.');
    document.id('result').adopt(el);
  }

  if(score.numCorrectAnswers === 0)
  {
    el = new Element('h3');
    el.set('html', 'Que pena, você não foi bem, vamos ver se você se recupera no próximo nível.');
    document.id('result').adopt(el);
  }

  if(score.numCorrectAnswers >= 1 && score.numCorrectAnswers <= 3)
  {
    el = new Element('h3');
    el.set('html', 'Hm, você poderia ter se saído melhor, mas acredito que você possa se recuperar no próximo nível.');
    document.id('result').adopt(el);
  }

  if(score.numCorrectAnswers >= 4 && score.numCorrectAnswers <= 6)
  {
    el = new Element('h3');
    el.set('html', 'Obrigada. Você me ajudou em algumas questões, vamos para o próximo nível?');
    document.id('result').adopt(el);
  }

  if(score.numCorrectAnswers >= 7 && score.numCorrectAnswers <= 9)
  {
    el = new Element('h3');
    el.set('html', 'Muito obrigada! Você me ajudou bastante, vamos para o próximo nível?');
    document.id('result').adopt(el);
  }

  if(score.incorrectAnswers.length > 0)
  {
    el = new Element('h4');
    el.set('html', 'Suas respostas incorretas:');
    document.id('result').adopt(el);

    for(var i=0;i<score.incorrectAnswers.length;i++)
    {
     var incorrectAnswer = score.incorrectAnswers[i];
     el = new Element('div');
     el.set('html', '<b>' +  incorrectAnswer.questionNumber + ': ' + incorrectAnswer.label + '</b>');
     document.id('result').adopt(el);

     el = new Element('div');
     el.set('html', 'Resposta correta: ' + incorrectAnswer.correctAnswer);
     document.id('result').adopt(el);
     el = new Element('div');
     el.set('html', 'Sua Resposta: ' + incorrectAnswer.userAnswer);
     document.id('result').adopt(el);

   }
 }

 window.scoreA = score.numCorrectAnswers;

 el = new Element('h2');
 //FORM para guardar o score
 el.set('html', '<form action="levels/b" method="POST"><input type="hidden" name="scorea" value=' +  window.scoreA +'><input type="submit" value="Próximo Nível"></form>');
 document.id('result').adopt(el);
}

var questions = [
{
  label: 'Qual a capital da Noruega?',
  options: ['Estocolmo', 'Oslo', 'Copenhagen'],
  answer: ['Oslo'],
  forceAnswer: true,
},
{
  label: 'Quem ganhou a Copa do Mundo de futebol na África do Sul?',
  options: ['Brasil', 'Holanda', 'Espanha'],
  answer: ['Espanha'],
  forceAnswer: true,
},
{
  label: 'Se estou tendo enjôos matinais, estou grávida?',
  options: ['Não', 'Sim', 'Depende. O enjoo matinal, muitas vezes acompanhado de vômito, pode surgir antes mesmo do sintoma principal, que é o atraso menstrual. Costuma ser o aviso mais comum da presença de gravidez.'],
  answer: ['Depende. O enjoo matinal, muitas vezes acompanhado de vômito, pode surgir antes mesmo do sintoma principal, que é o atraso menstrual. Costuma ser o aviso mais comum da presença de gravidez.'],
  forceAnswer: true,
},
{
  label : 'Quantos estados tem os Estados Unidos?',
  options : ['49','50','51'],
  answer : ['50'],
  forceAnswer : true
},
{
  label : 'O crocodilo é um...',
  options : ['anfibio','reptil', 'verme'],
  answer : ['reptil'],
  forceAnswer : true
},
{
  label: 'Em que ano aconteceu as Olimpíadas de Atlanta?',
  options : ['1992','1996','2000'],
  answer :['1996'],
  forceAnswer : true
},
{
  label: 'O que posso fazer para reduzir os enjoos?',
  options : ['Coma pouco e se exercite bastante','Evite comidas condimentadas e grandes refeições','Opte por alimentos mais úmidos'],
  answer :['Evite comidas condimentadas e grandes refeições'],
  forceAnswer : true
},
{
  label: 'Estou no início da gestação e tive um pequeno sangramento seguido de cólica. Isso é normal?',
  options : ['É normal','Depende. Pequenos sangramentos no início da gravidez podem ser fisiológicos ou não.','Não é normal'],
  answer :['Depende. Pequenos sangramentos no início da gravidez podem ser fisiológicos ou não.'],
  forceAnswer : true
},
{
  label: 'Quantos anos tem Silvio Santos?',
  options : ['70','82','Nunca saberemos a verdade'],
  answer :['Nunca saberemos a verdade'],
  forceAnswer : true
},
{
  label: 'Qual a população de Rondônia?',
  options : ['1,561 milhões','2,368 milhões','1000'],
  answer :['1,561 milhões'],
  forceAnswer : true
}
]

// RANDOM SEM REPETIÇÕES
questions.sort(function(){return Math.round(Math.random());});

function clearErrorBox() {
  document.id('error').set('html','');
}
var babyQuiz = new DG.babyQuiz({
  questions : questions,
  el : 'questions',
  forceCorrectAnswer:false,
  listeners : {
    'finish' : showScore,
    'missinganswer' : showAnswerAlert,
    'sendanswer' : clearErrorBox,
  }
});
babyQuiz.start();
}
//Fim da Funcao nivelA