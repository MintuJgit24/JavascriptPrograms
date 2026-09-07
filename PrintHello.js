//Variable declaration and initialization
//let, var, const used to declare variable

console.log("Hello all, welcome to javascript programming");
console.log("My name is Mintu Joseph");

//var variable=value;
/*

multi
line
command

*/

//single or double quotes can be used to declare string variable

var name='Mintu';
console.log("good morning",name);
console.log("welcome "+name);
console.log('welcome '+name);

var age=25;
console.log("age is",age)

var price=90.885
console.log("price is",price);

var isStudent=true;
console.log("is student:",isStudent);

var salary;
console.log("salary",salary);

var accountNumber=12930505959595n;
console.log("account number "+accountNumber);

var city=null;
console.log("city ",city);

console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(price))
console.log(typeof(isStudent))
console.log(typeof(salary))
console.log(typeof(accountNumber))
console.log(typeof(city))

//declaring
var a=4;
console.log("value of a: ",a);
//updating value of a
a=8;
console.log(a);
//updating value of a
//var keyword help to update value and type of variable
a="hello";
console.log(a);
//redeclaration of variable is possible with var keyword
var a=200;
console.log(a);


//let keyword
let b=55;
b=99;
b="welcome";
console.log(b);

//redeclaration of variable is not possible with let keyword, it will give error
//let b=200;
//console.log(b);

//const keyword used to store constant value, it cannot be updated or redeclared,give error
const c=3.14;
//c="hello";
//const c=7;
console.log(c);

