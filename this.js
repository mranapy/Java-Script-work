const myObject = {
  name: 'John',
  getFullName: function(){
    console.log(this);
    return 'Mr.'+ this.name;
  }

}
// myObject.getFullName();
const anotherObj = {
  name: 'Kamal'
}
// myObject.getFullName();
// anotherObj.getFullName = myObject.getFullName;
// anotherObj.getFullName();


function add(a,b) {
  console.log(this);
  return a + b;
}
add(3,6);
anotherObj.sum = add;
anotherObj.sum();
