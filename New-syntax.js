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