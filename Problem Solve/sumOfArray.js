//  Sum of array

const num = [34,54,23,98,56,59];

function arraySum(numbers) {
	let sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		let element = numbers[i];
		sum = sum+element;
	}
	return sum;
}
console.log(arraySum(num))





