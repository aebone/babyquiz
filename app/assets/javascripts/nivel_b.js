//Inicio da Funcao nivelB
function nivelB()
{
  // FORÇAR A RESPONDER ( forceAnswer: true )
  // Zerando o score B
  window.scoreB = 0;

  function showAnswerAlert()
  {
    document.id('error').set('html', 'Você precisa escolher uma resposta.');
  }

  function showScore() {
   var score = babyQuiz.getScore();

   var el = new Element('h2');
   el.set('html', 'Você fez '+ score.numCorrectAnswers + " pontos.");
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

 window.scoreB = score.numCorrectAnswers;
 window.totalScore = window.scoreA + window.scoreB;

 el = new Element('h1');
 el.set('html', + totalScore);
 document.id('result').adopt(el); 

 el = new Element('h2');
 //FORM para guardar o score
 el.set('html', '<form action="/levels/c" method="POST"><input type="hidden" name="totalscore" value=' +  window.totalScore +'><input type="hidden" name="scoreb" value=' +  window.scoreB +'><input type="submit" value="Próximo Nível"></form>');
 document.id('result').adopt(el);
}

var questions = [
{
  label: 'Em março de 1997, milhares de pessoas relataram ter visto um estranho objeto no céu do Arizona. Que forma tinha ele?',
  options: ['Forma de "V"', 'Forma de Disco', 'Forma humana'],
  answer: ['Forma de "V"'],
  forceAnswer: true,
},
{
  label: 'Como é chamada a categoria de aliens híbridos que seriam parte humana e parte animal?',
  options: ['Zoomórfica', 'Zoórfica', 'Mutante'],
  answer: ['Zoomórfica'],
  forceAnswer: true,
},
{
  label: 'No judô existem vários nomes para as pontuações. Quais das alternativas abaixo não corresponde a nenhuma pontuação?',
  options: ['Wasabi', 'Koka', 'Ippon.'],
  answer: ['Wasabi'],
  forceAnswer: true,
},
{
  label : 'Qual homem caiu da cadeira e quebrou o pescoço após receber uma notícia?',
  options : ['Elias','Acã','Eli'],
  answer : ['Eli'],
  forceAnswer : true
},
{
  label : 'Correu um boato de que Nick Jonas estava namorando uma atriz da Disney. Que atriz era essa?',
  options : ['Ashley Tisdale','Miley Cyrus', 'Selena Gomes'],
  answer : ['Miley Cyrus'],
  forceAnswer : true
},
{
  label: 'Qual é o nome do livro em que Fiuk lançou?',
  options : ['Fiuk in história','Fiuk e sua vida','Fiuk my life'],
  answer :['Fiuk my life'],
  forceAnswer : true
},
{
  label: 'Em que ano aconteceu a primeira temporada de F1?',
  options : ['1965','1970','1960'],
  answer :['1960'],
  forceAnswer : true
},
{
  label: 'Quem vai pra cadeia por causa da usurpação?',
  options : ['Paola Bracho','Carlos Daniel','Paulina Martins'],
  answer :['Paulina Martins'],
  forceAnswer : true
},
{
  label: '"O Amor e o Poder" da cantora Rosana foi um grande sucesso em 1987 / 1988. E foi tema de Jocasta ( Vera Fischer ) na novela?',
  options : ['O Profeta','Mandala','Laços de Familia'],
  answer :['Mandala'],
  forceAnswer : true
},
{
  label: 'Atuais dados de países europeus (2013), o desemprego na Europa atinge 23 milhões de pessoas. A maior parte (16 milhões) está nos 17 países que compõem a zona do euro. De acordo com esses dados, qual é o país com maior porcentagem de desemprego, e qual é esta porcentagem?',
  options : ['Portugal, e o desemprego está em 19,2%','Espanha, e o desemprego está em 22,8%','Grécia, e o desemprego está em 17,7%'],
  answer :['Espanha, e o desemprego está em 22,8%'],
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