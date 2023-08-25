var questionBank= [
    {
        question : ' Which type of JavaScript language is ___',
        option : ['Object-Oriented','Object-Based','Assembly-language','High-level'],
        answer : 'Object-Based'
    },
    {
        question : 'Which one of the following also known as Conditional Expression:',
        option : ['Alternative to if-else','Switch statement','If-then-else statement','immediate if'],
        answer : 'immediate if'
    },
    {
        question : ' The "function" and " var" are known as:',
        option : ['Keywords','Data types','Declaration statements','Prototypes'],
        answer : 'Declaration statements'
    },
    {
        question : 'Which of the following variables takes precedence over the others if the names are the same?',
        option : ['Global variable','The local element','The two of the above','None of the above'],
        answer : 'The local element'
    },
    {
        question : 'Which of the following type of a variable is volatile?',
        option : ['Mutable variable','Dynamic variable','Volatile variable','Immutable variable'],
        answer : 'Mutable variable'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;


function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}


function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}


function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}


next.addEventListener('click',nextQuestion);


function backToQuiz(){
    location.reload();
}



displayQuestion();
