//changing content of HTML element according to id
document.getElementById('id').textContent = '0';  

//changing content of HTML element according to class
document.querySelector('#class').textContent = '0';

// generate random number 
rand = Math.floor(Math.random());

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


//another way to add function to a prototype
Person.prototype.agefun = function(){
    console.log(2019-this.Birth);
};


//creating new object using function constructor (instantiation)
var john = new Person('john', 1992, 'engineer'); 