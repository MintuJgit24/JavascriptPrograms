//FOR LOOP
/*
for(initialize; condition; updating)
{
//code
}
*/

console.log("Hello world");
for(let i=1; i<=5;i++)
    {
        console.log(i);
    }
/*
let i=1 1<=5  2 1 //first i=1, 1<=5 true, i++=2, 1 printed
let i=2 2<=5  3 2    //i=2, 2<=5 true, i++=3, 2 printed
3<=5 4 3
4<=5 5 4
5<=5 6 5
6<=5
*/

for(let j=1;j<=4;j++){
    console.log("Hello World");
}


//WHILE LOOP
/*
//initialisation
while(condition){
//code to be executed, 
// updation      //can increment or decrement
}

*/

let num=1;
while(num<=5){
    console.log(num);
    num++;
}

let num1=10;
while(num1>=0){
    console.log(num1);
    num1--;
}

let password="";
while(password!=="123"){
    password="123";
}
console.log("login success");

let count=1;
while(true){
    console.log(count);
    count++;
    if(count==10){
        break;
    }
}

//DO WHILE LOOP
// execute code block once, before checking the condition
/*
syntax:
do{
code block
}
while(condition);
*/

let number=6;
do{
    console.log(number);
    number++;
}
while(number<=5);


//TERNARY OPERATOR
let age=15;
let result=age>=18?"You are eligible for license":"You are not eligible for license";
//? is used for if and : is used for else
console.log(result);

let mark=50;
mark>=25?console.log("you have passed"):console.log("you have failed");

//Task to check if given letter is vowel or not
let letter='d';
if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u'){
    console.log("it is a vowel");
}
else{
    console.log("it is not a vowel");
}


