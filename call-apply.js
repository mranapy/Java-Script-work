const normalPerson = {
  fname: 'Rahim',
  lname: 'Mia',
  salary: 20000,
  getFullName: function(){
    console.log(this.fname, this.lname);
  },
  chargeBill: function(ammount, tax, tips){
    console.log(this);
    this.salary = this.salary - ammount - tax + tips;
    return this.salary;
  }
}
// console.log(normalPerson);
// normalPerson.chargeBill(550);
// normalPerson.chargeBill(2500);
// console.log(normalPerson.salary);
// console.log(normalPerson.fname);
// --------------------------- bind
 const heroPerson={
   fname: 'Hero',
   lname: 'hamada',
   salary: 25000,
 }
 const friendlyPerson={
   fname: 'Golam',
   lname: 'Ahmad',
   salary: 30000,
 }

// normalPerson.chargeBill();
// const heroBill = normalPerson.chargeBill.bind(heroPerson);
// heroBill(2000);
// console.log(heroPerson.salary);
//
//
// const firndlyBill = normalPerson.chargeBill.bind(friendlyPerson);
// firndlyBill(3000);
// console.log(friendlyPerson.salary);

// -------------------------- call

// normalPerson.chargeBill.call(heroPerson,500);
// normalPerson.chargeBill.call(heroPerson,2000,1000,200);
// console.log(heroPerson.salary);
//
// normalPerson.chargeBill.call(friendlyPerson,2000,1000,500);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

// ------------------------- apply
normalPerson.chargeBill.apply(heroPerson,[2000,1000,500])
console.log(heroPerson.salary);


