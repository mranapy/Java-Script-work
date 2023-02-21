// Alphabetically sorts an array
const user = ['Karim','Afzal','Rahim','Bantu','Musa','Farhad']

const usersort = user.sort();
console.log(usersort)

// Numeric sort
const points = [40, 100, 1, 5, 25, 10];
function pointSort(a,b){
	return a-b
}
// const res = points.sort(function(a, b){return a - b});

const res = points.sort(pointSort);
console.log(res);


// Sorting an Array in Random Order
const points2 = [40, 100, 1, 5, 25, 10];

const res2 = points2.sort(function(){return 0.5 - Math.random()});
console.log(res2)

