class Person {
  constructor(fname,lname,salary) {
    this.fname = fname;
    this.lname = lname;
    this.salary = salary;
  }
}

const heroPerson = new Person('Hero','Hamada',20000);
console.log(heroPerson);
const friendlyPerson = new Person('Karim','Mia',30000);
console.log(friendlyPerson);


// class old version before es6
// function Person1 (fname,lname,salary){
//   this.fname = fname;
//   this.lname = lname;
//   this.salary = salary;
// }
// const oldVersion = new Person1('Grand', 'Pappa', 1200);
// console.log(oldVersion);



// Class(ES6) 
// Class is a template for creating objects

class Person2 {
    constructor(fname, lname, birthday) {
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullname() {
        console.log(this.firstname, this.lastname);
    }

}

let person1 = new Person2("Fazle", "Rahat", "08-05-1998"); 
let person2 = new Person2("Moinul", "Islam", "02-11-1991");
let person3 = new Person2("Rony", "Chy", "01-17-1996");

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());


console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());