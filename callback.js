function callBack(name,age,task) {
	console.log('Name ',name, 'Age ',age);
	task();
	console.log('-------------------------');
	// washHand();
	// takeShower()
	
}
function washHand(){
	console.log('Wash your hand with soap');
}
function takeShower(){
	console.log('Take shower');
}
callBack('Mina',23,washHand);
callBack('Raju',12,takeShower);

