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
