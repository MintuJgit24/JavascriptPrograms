//scope of variables- where all variables can be accessed or used
// 3types: Global, Function, Block
//Scope in Function
// var variable can be accessed only inside function if we give outside function we get reference error
function login(){
    var userName="Mintu";
    console.log(userName);
}
login();
//console.log(userName);

//Scope in BLOCK -if block
//var is a Function scope, var is not a Block scope
// var is accessible outside block
if(true){
    var firstName="Anu";
    console.log(firstName);
}
console.log(firstName);

//let variable is Block scope, can be accessed only inside a block, else will get error
if(true){
    let user1="Meena";
    console.log(user1);
}
//console.log(user1);

//const is Block scope, can be accessed only inside block
if(true){
    const price=200;
    console.log(price);
}
//console.log(price);

//GLOBAL varaible is accessible everywhere
//sample program
const gVariable="i am a global variable";
function scopeSample(){
    var fVar="i am a function variable";
    console.log(gVariable);//yes
    console.log(fVar);//ys
    if(true){
        let bVariable="i am a block varible";
        console.log(gVariable);//ys
        console.log(fVar);//ys
        console.log(bVariable);//ys
    }
    //console.log(bVariable);//no
}
//console.log(fVar);//no
scopeSample();