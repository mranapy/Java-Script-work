//  remove duplicate item from array

let user = ['Karim','Bantu','Afzal','Rahim','Bantu','Karim','Musa','Farhad','Afzal']
console.log("Before Arry Lenght >> "+user.length);
let uniqueUser = [];
for (let i = 0; i < user.length; i++) {
	let element = user[i];
	let index = uniqueUser.indexOf(element);
	if (index == -1){
		uniqueUser.push(element);

	}
}
console.log(uniqueUser);
console.log("After Arry Lenght >> "+uniqueUser.length);



