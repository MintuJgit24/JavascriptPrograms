//call back function
//inside a function we pass another function as parameter
function greet(){
    console.log("Hello good morning");
}
function demo(){
    console.log("demo function call");
}
//callBack here is a parameter to understand
function executeGreet(callBack){
    callBack();
}
executeGreet(greet);//execution starts here once function start here callBack parameter is taken as greet,greet() called
executeGreet(demo);//similar to above here callBack parameter taken as demoFunction,demoFunction() called