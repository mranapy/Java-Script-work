function sayLoveYou(name){
	console.log('Jaan o baby ' + name);
	console.log(`Billay baby ${name} ... koi tumi?`);
}

sayLoveYou('rana');
// let date = 14;
// var place = 'MomoIn';
// sayLoveYou('meu');

function doubleIT(num){
	let result = num * 2;
	console.log(result);
	return result;
}

doubleIT(8);
let first = doubleIT(70);
let second = doubleIT(8);
	function sumIT(){
		let res = first + second;
		console.log('Result = ' + res);
	}

sumIT();

function addAnother(num1,num2){
	let result = num1 + num2;
	console.log("Sum of two Number= " +result)
	return result;
}
addAnother(3,6);

function toCelsius(fahrenheit) {
  let res = (5/9) * (fahrenheit-32);
  console.log('Temperature (fahrenheit- celsius) : ' +res+"° celsius");
  return res;
}
toCelsius(70);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const newstring = fruits.toString();
console.log(newstring)
const arrjoin = fruits.join(", ");
console.log(arrjoin)

const poparr = fruits.pop();
console.log(poparr)
console.log(fruits)

let res = myFunction(2,20);
console.log(res)
function myFunction(p1, p2) {
  c = p1 * p2;
  return c;
}



myFunction2();

function myFunction2() {
	// Local Variable
  let carName = "Volvo";
  console.log(carName)
}
// console.log(carName)


function dots (...args){
	console.log(args) 
	return args
}

let val = dots(2,4,6,8)

let arr = val.map(function(val){
	return ++val;
});
console.log(arr)
dots(5,8,9,11)










