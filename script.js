//Variables
var x = "hussam";
console.log(x);

var a, b;
a = 2;
b = 4;
 
console.log(a);

console.log(b);

// if statement
if (a > b) {
	 console.log(a + ' is bigger than ' + b); 
} 

else if (a === b){ 
	console.log(a + ' is equal to ' + b); 
}
         
else { 
	console.log(a + ' is less than '+ b);
}

//switch statment

switch(a)
{
	case 1:
		//statement1
	case 2:
		//statement2
	default:
		//default statement
}


 
// Arrays

var cars = [1,2,4]; 


//objects syntax 1

var obj = {
	att1: 'a',
	att2: '2',
	func1: function(){
		this.att3 = this.att1 + this.att2;
	} 
	
};
obj.func1();
console.log(obj);  

		
//objects syntax 2

var obj2 =new Object();
obj2.att1='a';
obj2.att2='2';
obj2.func2=function(){this.att3 = this.att1 + this.att2;}
	
obj2.func2();
console.log(obj2);