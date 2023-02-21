// let depth = 23;
// let animal = 0;
function animalCalculator(depth){
	animal = 0;
	if (depth <= 10){
		animal = depth *50;
	}
	else if(depth <= 20){
		let firstPart = 10*50;
		let remain = depth - 10;
		let secondPart = remain * 100;
		animal = firstPart+secondPart;
	}
	else{
		let firstPart = 10*50;
		let secondPart = 10*100;
		let remain = depth -20;
		let lastPart = remain *300;
		animal = firstPart+secondPart+lastPart;
	}
	return animal;
}
let count = animalCalculator(15);
console.log(count);