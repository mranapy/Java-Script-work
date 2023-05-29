let line = "rehtorb iahb neilA olleH";

function reverseString(str) {
	let reverse = "";
	for (var i = 0; i < str.length; i++) {
		let char = str[i];
		reverse = char + reverse;
	}
	return reverse;
}
console.log(reverseString(line))

