/*
// My solotion
function Questions (){
   
    var  Q = ['what is the best language? \n 0: js \n 1: python \n 2: java', 'what is yhe best course in js? \n 0: udemy \n 1: alzero \n 2: udacity', 'who is the best constructor in js? \n 0: osama \n 1: jona \n 2: gara'];
    
   rand = Math.floor(Math.random() * Q.length) ;
    
     var correctAns = [0,0,1];
     
    console.log(Q[rand]);
    
    
    var x = prompt('please choose the correct answer (just type the number)');
    
    console.log(x);
    
    while (x != 0 && x != 1 && x != 2 ){
        var x = prompt('please choose the correct answer (just type the number) hurry');
    }
    
    
    if (x != correctAns[rand]){
      
       console.log('sorry, your answer is wrong. try again '); 
        var x = prompt('please choose the correct answer (just type the number)');
        while(x != correctAns[rand]){
           console.log('sorry, your answer is wrong. try again '); 
            var x = prompt('please choose the correct answer (just type the number)');
        }
        console.log('Great, finally it\'s correct ');
    }
    
    else {
        console.log('Great, correct ');
    }
    
  
}

Questions();

*/


//the correct solotion
 
//creating function constructor
function Questions(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

// method to diplay the question and the answer
Questions.prototype.displayQuestion = function()
{
    console.log(this.question);
    
    for (var i = 0; i<this.answers.length; i++){
        console.log(i + ': ' + this.answers[i]);
    }
}

// method to check if the answer is right or not
Questions.prototype.checkAns = function(ans)
    {
        if(ans === this.correct){
            console.log('Great, correct ');
        }
    
    else{
        console.log('sorry, your answer is wrong. try again ');
    }
    
    }

//creating objects (questions)
q1 = new Questions('what is the best language?', ['js', 'python', 'java'], 0);
q2 = new Questions('what is yhe best course in js?', ['udemy', 'alzerro', 'udacity'], 0);
q3 = new Questions('who is the best constructor in js?', ['osama', 'abdallah', 'jane'], 2);


var questions = [q1, q2, q3];
rand = Math.floor(Math.random() * questions.length) ;

questions[rand].displayQuestion();
var x = parseInt(prompt('please choose the correct answer'));

questions[rand].checkAns(x);


    
    
    









