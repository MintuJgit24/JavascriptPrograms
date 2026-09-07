//typescript file
//typescript=superset of javascript , JS + additional features(type safety- type should be given to variable)
//declaration of variable in typescript
let empId: string = "EMP001";
//empId=001; type error because empId is inferred as string

let mark: number = 50;

let isPresent: boolean = true;

let numbers = [1, 2, 3, 4, 5];//array in javascript

let numbers1: number[] = [1, 2, 3, 4, 5];//array in typescript
//array methods same as JS

//Object in typescript need to define the type of object properties
let student: {
    name: string,
    age: number,
    isActive: boolean
} = {
    name: "John",
    age: 30,
    isActive: true
}

//Fuction in typescript
//without parameter
function add(){
    let a:number=10;
    let b:number=20;
    console.log(a+b);
}
add();

//with parameter
//by default if return type is not defined then it is inferred as void
function sub(x: number, y: number): number{
    //console.log(x-y);
    return x-y;
}
//sub(20,10);
console.log(sub(20,10));