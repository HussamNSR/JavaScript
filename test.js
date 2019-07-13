var mark = {
	name: 'mark',
	mass: 50,
	height: 1.7,
	BMI: function(){
		return this.mass / (this.height*this.height);
	}
}



var john = {
	name: 'john',
	mass: 60,
	height: 1.9,
	BMI: function(){
		return this.mass / (this.height*this.height);
	}
}



if (mark.BMI() > john.BMI()){
	console.log(mark.name + '\'s BMI is greater than ' + john.name + '\' BMI' )
}
else if(john.BMI() < mark.BMI()){
		console.log(john.name + '\'s BMI is greater than ' + mark.name + '\' BMI' )
		}
else{ console.log(john.name + '\'s BMI is the same as ' + mark.name + '\' BMI' )
	
}
