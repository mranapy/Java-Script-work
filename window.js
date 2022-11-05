let name = "Karim";

function add(num1,num2){
  //result = num1 + num2; // Global
  //window.result = num1 + num2; // Global window
  var result = num1 + num2;  // recomand
  console.log('Result inside function =', result);
  console.log('Name inside =>', name);
  function double(num){
    return num * 2;
  }
  var total = double(result);
  return total;
}
console.log('Name outside =>', name);
const sum = add(3,5);
console.log('Total = ',sum);
console.log('Result outside function = ', result);
