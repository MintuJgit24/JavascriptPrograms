//array is used to store multiple values in single variable
//declare
let colors=['red','yellow','white','black'];
console.log(colors);
//-array is a data type
//size total elements
//index start from 0th index
//index=size-1

console.log(colors[1]);
//push method is used to add new element at the end of the array
//arrayname.push()
colors.push('blue');
console.log(colors);

//pop method is used to remove last element from the array
//arrayname.pop()
colors.pop();
console.log(colors);

//unshift method is used to add new element at the start of the array
//arrayname.unshift()
colors.unshift('green');
console.log(colors);

//shift method is used to remove first element from the array
//arrayname.shift()
colors.shift();
console.log(colors);

//length method is used to find the size of the array
console.log(colors.length);

console.log("Looping array using for loop");
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}

//for of loop
console.log("Looping array using for of loop");
for(let c of colors){
    console.log(c);
}

//TASK array of numbers
let numbers=[1,2,3,4,5];
numbers.push(6,7)
console.log(numbers.length);
console.log(numbers);

numbers.pop();
console.log(numbers);
console.log("using for loop:")
for(let n=0;n<numbers.length;n++){
    console.log(numbers[n]);
}

console.log("using for of loop:")
for(let k of numbers){
    console.log(k);
}

numbers.unshift(0,9,8);
console.log(numbers);

numbers.shift();
console.log(numbers);


//includes method to check if element present or not
console.log(numbers.includes(7));
console.log(numbers.includes(6));

//indexof method return the position of element
console.log(numbers.indexOf(8));
console.log(numbers.indexOf(3));

//slice method to take a portion from array giving the index
//starting index taken(inclusive)
//ending index take element just before that(exclusive)
const slicedArray=numbers.slice(0,4);
console.log(slicedArray);

//splice method to remove
console.log(numbers);
//numbers.splice(1,3);
//starting index taken then taking count of elements to be removed including the index element
//console.log(numbers);

//to delete and add new element=replacing
numbers.splice(2,2,7,0);
//first number is index, then no.of elements to be removed, then replacing values in commas(7,0)
console.log(numbers);

//sum of array elements
let array1=[1,2,3,4,5];
console.log(array1);
let sum=0;
for(let i=0;i<array1.length;i++){
    sum=sum+array1[i];
    //sum+=array[i];
}
console.log("sum is: "+sum);

//task to print only even numbers from an array
let num=[1,2,3,4,5,6];
let even=[];
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
       even.push(num[i]);
    }
}
console.log("even numbers are: ",even)

//Print odd numbers
//filter method to filter elem in array
let oddNumbers=num.filter((x)=>{return x%2!==0})
//x denote each element in array
console.log("odd numbers are: ",oddNumbers);

//map to update all elements in array
let mappedArray=num.map((y)=>{return y*2})
console.log(mappedArray);

//reduce to reduce elements in array
//reduce method return a single element as result
let result=num.reduce((a,b)=>{return a+b},10)
//a denotes like sum=0 initialising here value =10, b denotes each elem in array or index
console.log(result);

let mul=num.reduce((d,e)=>{return d*e},5)//prod of numbers in array * 5
console.log(mul);

