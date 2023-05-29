// Feet to Miles

function feetToMile(feet) {
	const ft = 0.0001894;
	let mi = ft*feet;
	if (mi<1){
		return mi;
	}
	else{
		return parseInt(mi);
	}
}
const res = feetToMile(65873);

console.log(res+ ' Miles');


