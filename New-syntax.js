//changing content of HTML element according to id
document.getElementById('id').textContent = '0';  

//changing content of HTML element according to class
document.querySelector('#class').textContent = '0';

//click listener
document.querySelector('.id').addEventListener('click',function);


//change listener
document.querySelector('.id').addEventListener('change',function);

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




//creating module ..you can connect modules by passing them as an arguments to a seperate module
var budgetController = (function() {
    
    var x = 23; // private variable
    
    var add = function(a) {  //private function
        return x + a;
    }
    
    return {                       // returning object to be used publically ( budgetController is simply an obj containing 1 method)
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})(); 





//use call to borrow presentation method

john.presentation.call(ema, 'friendly', 'morning')
    
 //use Bind
var johnfriendly = john.presentation.bind(john, 'friendly');
johnfriendly('night');


//use call & Bind
var emaFormal = john.presentation.bind(ema, 'formal');
emaFormal('night');



//array + foreach

clearFields: function(){
             var field, arrField;
             
             field = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
             
             arrField = Array.prototype.slice.call(field);
             
             arrField.forEach(function(current, index, array){
                 current.value = '';
             });
             
             //point to desc field when finish
             arrField[0].focus();

}


 // once we click on delete butn we get the id of the deleted item
        
itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;


//remove html element
 element = document.getElementById(itemId);
 element.parentNode.removeChild(element);


//delete array item
 array.splice(index,1);


//map function: extract updated array from existed one

var x =  oldArray.map(function(current){
            return current*2; }); 



// edit array and return new one
var ids =  ARR.map(function(current){
            return current.id; });  


// number format
var num = 3.4544;
num.toFixed(2) // num  = 3.46,,, 2.toFixed(2) = 2.00

var num = '23457';
num.substr(0,2); // = '23'


// date object
date = new Date ()


// querySelectorAll (change the color for all selected fields)
var nodeList = document.querySelectorAll('.id');
//change it to an array
var arr = Array.prototype.slice.call(node);
arr.forEach(function(curr){
    curr.style.background = 'red';
} )



//////////////////// ES6



let x = 3;  //can be changed. 
const name = 'hussam';  //can not be changed.
const age = 30;   


//IIFE In ES6

{
    let x = 3;
    const z = 2;
}


//template leterals in Strings
using back teck `` istead of '' and use ${variable}

console.log(`this is ${name}. i'm ${age} years old`);

``.startsWith('');
``.endsWith('')
``.includes('')
``.repeat(# of times)
          
          
          
// arrow function  =>

let year = [1992,1994,1996];
          
let age = year.map((el, index) => {2019 - el}); // returns a list of ages

          
 // we use arrow function in case of reserving 'this' keyword and use it inside a function within a method

const obj = { name: 'hussam',
              age: 30,
              func = function(){
             document.querySelector(...).addEventListener('click', (args) => {console.log(this.name)})
            }
    
}



//Destructuring(extractung data from obj or array and store it in variables)

//array
const[name, age] =['hussam', 27];

//obj
const obj ={
    name1: 'hussam',
    age1: 27,
}
const{name1, age1} = obj;
// if you want to change varaible name >>
const{name1: a, age1: b} = obj;


//returned value
function calcAgeAndRet(y){
    const age = new date().getFullYear() - y;
    return [age, 65 - age]
}
const [age2, ret]  = calcAgeAndRet(1992);
    
    
    
// querySelectorAll (change the color for all selected fields)
var nodeList = document.querySelectorAll('.id');
Array.from(nodeList).forEach(cur => {
    cur.style.background = 'red';
} )


//For Of
for(const cur of arr){};

//Find index method (check which is +18 age )
ages = [12, 11, 10, 21];
ages.findIndex(cur => cur >= 18); //returns an index
//find method
ages.find(cur => cur >= 18); // returns a value


// spread operator ...
function addAges(a,b,c,d){
    return a+b+c+d
}
const ages = [20,10,19,28];
addAges(...ages);

x = ['q', 'b'];
y = ['v', 'm'];
xy = [...x, ...y]; // xy = ['q', 'b', 'v', 'm'];



//Rest parameters..flexible parameters
function isFullAge(limit, ...years){
    years.forEach(cur => (2019-cur) >= limit);
    
}
isFullAge(18, 1992, 1999, 2000, 1980);


//Default parameters. (when ags are less than parameters you can set a default value for the non specified parameters)
function para (x, y, z, e = 3, c = 2){}; // e and c have default values




// MAPS... it's an array of dictionaries [{key=>value}, {key=>value}]

dic = new Map(); 
dic.set(key, value) // add new key
dic.get(key)        // get key value
dic.delete(key)
dic.has(key)
dic.clear()         // clear the entire map

// you can apply forEach method
dic.forEach((value, key) =>)

// you can use it in for of loop
for(let [key,value] of dic.entries()){};



//Classes in ES6  //Note: properties are not implemented here

class ClassName {
     constructor(name, birth, job){     
         this.name = name;
         this.birth = birth;
         this.job = job;
     }
    
    method1(){
        
    }
    
    //static class
    static func(){};
}

// create class instanse
const hussam = new ClassName('hussam', 1992, 'engineer');
// insert instances in a list
const allObj = [new ClassName('hussam', 1992, 'engineer'),new ClassName('ahmed', 1995, 'engineer') ]

//Inherritance

class subClass extends ClassName{
    constructor(name, birth, job, nickName, car){
    super(name, birth, job);
    this.nickName = nickName;
    this.car = car;
    }
    
    method2(){};    
}


//array SUMMER
 arr.reduce((prev, cur, index) => prev + cur, 0)//[1,1,1,1] ==> 4





    





