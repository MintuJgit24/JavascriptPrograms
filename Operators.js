//arithmetic operators: +,_,*,%,/
let a=5;
let b=10;
console.log("addition: ",a+b);

let c=a-b;
console.log("subtraction: ",c);

console.log("multiplication: ",a*b);

console.log("division: ",a/b);

console.log("modulus: ",a%b);

//assignment operators: =,+=,-=,*=,/=
let x=10;
//x=x+5;
//or
x+=5;
console.log(x);

//x=x-5;
x-=5
console.log(x);

//x=x*5;
x*=5;
console.log(x);

//x=x/5;
x/=5;
console.log(x);

//comparison oprators: ==,===,!=,!==,>,<,<=,>=
let y=5;
let d="5";
console.log(y==d);
//here it will check only value of variable, so it will return true
console.log(y===d);
//here it will check value and type of variable, so it will return false

let e="hello";
let f="helo";
console.log(e==f);
console.log(e===f);

let g=8;
let h=8;
let i='8';
console.log(h!=g);
console.log(h!==g);
console.log(i!==h);

let j=10;
let k=20;
console.log(j>k);
console.log(j<k);

let m=2;
let n=3;
console.log(m>=n);
console.log(m<=n);