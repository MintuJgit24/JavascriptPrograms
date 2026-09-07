//functions are block of codes ,can be reused, can be called anywhere
//function functionname
greet();
console.log("my name is Mintu");
function greet(){
    console.log("good morning");
}
greet();

//function with parameter
function addition(a,b){
    // let a=5;
    // let b=10;
    let c=a+b;
    console.log("sum is: ",c);
}
addition(5,10); //here we pass data as arguments instaed of declaring
addition(2,3);

//return type , we can perform any actions with this return values
//to print return value that it holds we need to console it else we cant see any output
function subtraction(c,d){
    return c-d;
}
console.log(subtraction(10,5));
//instead of direct console
const result=subtraction(20,10);
console.log(result);

//using ARROW function - function without name
const mul=(a,b)=>{
    return a*b  
}
console.log(mul(2,3));
//here we used a and b which is already used before-this takes 'scope' scenario

//we can call without return keyword also
const add=(e,f)=>e+f
console.log(add(30,3));