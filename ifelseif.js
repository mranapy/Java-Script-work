const time = new Date().getHours();
let greeting;
if (time < 10) {
  let greeting = "Good Morning";
  console.log(greeting)
}
else if (time < 20){
	console.log('Good day')
}
else {
	console.log('Good Evening')
}


let days = new Date().getDay();

console.log(days)


let book = "maths";

if( book == "history" ) {
    console.log("History Book");
    }
else if( book == "maths" ) {
    console.log("Maths Book");
    }
else if( book == "economics" ) {
    console.log("Economics Book");
    }
else{
    console.log("Unknown Book");
    }
