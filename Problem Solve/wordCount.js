// Word count
let sentance = "I am a good   person.   I don't snore at night.";
let count = 0;
for (var i = 0; i < sentance.length; i++) {
	let char = sentance[i];
	// console.log(char)
	if(char == " " && sentance[i-1] != " "){
		count++;
	}
}
count++;
console.log(count);



