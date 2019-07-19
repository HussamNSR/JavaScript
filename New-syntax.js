//changing content of HTML element according to id
document.getElementById('id').textContent = '0';  

//changing content of HTML element according to class
document.querySelector('#class').textContent = '0';

// generate random number 
rand = Math.floor(Math.random() * 6) + 1

//change CSS style
document.querySelector('.dice1').style.display='none';

//remove text from class.
document.querySelector('.class').classList.remove('xxx');

// switch
document.querySelector('.class').classList.toggle('xxx');

// switch between two values
x===0 ? x = 1 : x = 0;



// create new object using object letiral
var john = {
    name: 'john',
    Birth: 1992,
    job: 'engineer',
    
};


///Creating Function constructor ( MOST POPULAR)
var Person = function(name, Birth, job) {
    this.name = name;
    this.Birth = Birth;
    this.job = job;
    this.agefun = function(){console.log(2019-this.Birth);}
}


//another way to add function to a prototype  (like class method)
Person.prototype.agefun = function(){
    console.log(2019-this.Birth);
};


//creating new object using function constructor (instantiation)
var john = new Person('john', 1992, 'engineer'); 


//prototype property check
console.info(obj) // get detailed info of an obj
obj instanceof prototype
obj.hasOwnProperty('method or att')



//another way to create obj using obj.create
var personProto = {
    baga: function(){
        console.log(2019-Birth);
    }
};

// obj 1
var jake = Object.create(personProto);
jake.name = 'jake';
jake.job = 'doctor';



// obj 2
var selena = Object.create(personProto,
{
    name: {value: 'selena'},
    Birth: {value: 1992},   
})


//Passing functions as arrgument (array manubilation function)
var years = [2005,1992,1999];

function arraycalc(arr, fun)

{
    var arrRes = [];
    for(var i = 0; i< arr.length; i++)
        {
          arrRes.push(fun(arr[i]));
        }
    return arrRes;
}


function agecalc (el)  //(call-back function)
{
    return 2019-el;
}

function isFull (limit,el)  //(call-back function)
{
    return el >= limit;
}

var age = arraycalc(years, agecalc);

var germanAge = arraycalc(age, isFull.bind(this,18));


console.log(age);
console.log(germanAge);



// Function returning another function
function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ' can you please explain UX design is?');
        }
    }
    
    else{
        return function(name){
            console.log('Hello' + name + ' what do you do?');
    }
}
}

// function call
   var teacherQuestion = interviewQuestion('designer');
    teacherQuestion('hussam');

// another way to call the function
interviewQuestion('designer')('hussam');
    
 



//immediate invoked function expression
// used to protect variables to not be used as global scope variable (create new scope that is hiddin from outside scope)

(function() {
  var  = "bar";
  console.log(foo);
})();



//Ex for IIFE use  
//A closure is a function having access to the parent scope, even after the parent function has closed.
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();        // the counter is now 3





// Bind, call and apply
var john = {
    name: 'john',
    Birth: 1992,
    job: 'engineer',
    presentation: function(style,time){
        if(style === 'formal'){
            console.log('hello ladys and jentlemen my name is ' + this.name + ' and iam '+ this.job + ' have a nice ' + time);
        }
        
        else if(style === 'friendly'){
            console.log('hey wussap!! my name is ' + this.name + ' and iam '+ this.job + ' have a nice ' + time);
        }
    }   
};
var ema = {
    name: 'ema',
    Birth: 1996,
    job: 'nurse',
    
};


//use call to borrow presentation method

john.presentation.call(ema, 'friendly', 'morning')
    
 //use Bind
var johnfriendly = john.presentation.bind(john, 'friendly');
johnfriendly('night');


//use call & Bind
var emaFormal = john.presentation.bind(ema, 'formal');
emaFormal('night');











