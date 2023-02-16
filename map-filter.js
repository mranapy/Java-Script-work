const numbers = [3,4,5,7,8];
// const res = [];

// for (let i = 0; i < numbers.length; i++) {
// 	const element = numbers[i];
// 	const result = element * element;
// 	res.push(result)
// }


// function square(element){
// 	return element * element;
// }
// const res = numbers.map(square)

// const square = element => element*element;
// const res = numbers.map(function square(element,index,array){
// const res = numbers.map(function square(element,index){
// 	// console.log(element,index,array)
// 	console.log(element,index)
// 	return element * element;
// })
// console.log(res)


const result = numbers.map(x => x*x);
console.log(result)