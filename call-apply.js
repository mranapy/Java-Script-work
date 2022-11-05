const normalPerson = {
  fname: 'Rahim',
  lname: 'Mia',
  salary: 20000,
  getFullName: function(){
    console.log(this.fname, this.lname);
  },
  chargeBill: function(ammount){
    this.salary = this.salary - ammount;
    return this.salary;
  }
}
// console.log(normalPerson);
normalPerson.chargeBill(550);
normalPerson.chargeBill(2500);
console.log(normalPerson.salary);
console.log(normalPerson.fname);
