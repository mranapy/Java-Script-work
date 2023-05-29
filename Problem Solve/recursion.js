// 5! = 1*2*3*4*5

function factorial(num) {
	let fact = 1;
	for (var i = 1; i <= num; i++) {
		fact *= i;
		console.log(i,fact);
	}
	return fact;
}
let res = factorial(5)
console.log("Result > ",res)

// 5! = 5*4*3*2*1
function factorialRecursive(num) {
	if(num==1){
		return 1;
	}
	else{
		console.log(num, num-1);
		return num * factorialRecursive(num-1);
	}
}
const num = 7;
let result = factorialRecursive(num)
console.log(`The factorial of ${num} is ${result}`);