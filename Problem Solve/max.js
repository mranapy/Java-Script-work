let bussiness = 450;
let minister = 950;
let doctor = 543;

if(bussiness> (minister && doctor)){
	console.log('Bussiness is bigger')
}
else if(minister> (doctor && bussiness)){
	console.log('Minister is bigger')
}
else{
	console.log('Doctor is bigger')
}

let maxPerson = Math.max(bussiness,minister,doctor)
console.log(maxPerson)

// Find the largest element of an array
let numbers = [45,23,65,97,73,44]
let max = numbers[0]
for (var i = 0; i < numbers.length; i++) {
	let element = numbers[i]
	if (element>max) {
		max=element
	}
}
console.log(max)

console.log(Math.max(...numbers))

