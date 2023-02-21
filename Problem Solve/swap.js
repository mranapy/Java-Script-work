// 1st way to solve
let a=5;
let b=7;
console.log("Before swap>> a= ",a, ",b= ",b);
let temp=a;
a=b;
b=temp
console.log("After swap>> a= ",a, ",b= ",b);
console.log('--------------------------------')

// Another way to solve
let x = 8;
let y = 4;
console.log("Before swap>> x= ",x, ",y= ",y);
x= x+y;
console.log(x)
y= x-y;
console.log(y)
x= x-y;
console.log(x)
console.log("After swap>> x= ",x, ",y= ",y);
console.log('--------------------------------')

// Another way to solve
let p= 7;
let q= 9;
console.log("Before swap>> p= ",p, ",q= ",q);
[p,q] = [q,p];
console.log("After swap>> p= ",p,",q=",q);