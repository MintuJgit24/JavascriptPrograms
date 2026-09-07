let num=[1,2,3,4,5];
let sArray=num.slice(0,2);
console.log(sArray);
console.log(num);

let fruits=["apple","orange","kiwi","grapes"];
let s=fruits.slice(0,2);
const a=fruits.slice(3);
console.log([fruits]);
fruits.splice(2,2,"avocado","litchi");
console.log(fruits);

//console.log(s);
//console.log(a);

let k=num.splice(0,2);
console.log(num);