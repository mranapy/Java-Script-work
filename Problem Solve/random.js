let num= 2.49999;
const result = Math.floor(num);
console.log(result)

const result2 = Math.ceil(num);
console.log(result2)

let result3 = Math.round(num)
console.log(result3)

// let dice = Math.random();
for (var i = 0; i < 10; i++) {
	let dice = Math.random() * 6;
	// let output = Math.round(dice)
	let output = Math.floor(dice)
	console.log(output)
}

function getRandomNumber(min,max) {
	number = Math.floor(Math.random() * (max-min+1)) + min;
	return number;
}
const res = getRandomNumber(1,6)
console.log('Random number >> '+res);