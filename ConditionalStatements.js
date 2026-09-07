/* syntax
if(condition)
{
//code
}
else{
    //code }
*/

let age=30;
//code work if only if the condition is true, if the condition is false then it will not work so no output will be there
if(age>=18)
    {
    console.log("you are adult");
}
else{
    console.log("you are not adult");
}

// syntax
/*
if(condition1){
}
else if(condition2){
}else  if(condition3){
}else{
}

*/

//JavaScript checks conditions in an if...else if chain sequentially 
//from top to bottom and executes the first condition that evaluates to true.

let mark = 50;

if (mark >= 70) {
    console.log("grade A");
} 
else if (mark >= 60) {
    console.log("grade B");
} 
else if (mark >= 50) {
    console.log("grade C");
} 
else {
    console.log("failed");
}

//switch statement is used to perform different actions based on different conditions.
/*

switch(expression){
case val1:
case val2:
case vale3:
:
:
:
default:

}
*/

let day=8;
switch(day){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("tuesday");
    break;
case 3:
    console.log("wednesady");
    break;
case 4:
    console.log("thursday");
    break;
case 5:
    console.log("friday");
    break;
case 6:
    console.log("saturday");
    break;
case 7:
    console.log("sunday");
    break;
default:
    console.log("invalid day");

}