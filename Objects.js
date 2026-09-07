//Objects have properties and functions
//properties in 'key-value' pair
let student = {
    name: "Mintu",
    age: 30,
    course: "JavaScript",
    place: "Kochi"
}
console.log(student.course);//dot notation

console.log(student["age"]);//bracket notation

console.log(student);


//'for-in loop' -to loop objects in JS
for (let s in student) {  //s denotes key
    console.log(s + ":" + student[s]);  //concat to get key and value
}

//to add some key-values
student.gender = 'female';
console.log(student);

//to update-here if data already there gets updated, or not there get added
student.age = 20
console.log(student);

//to delete
delete student.place;
console.log(student);

//to create array of objects
let employees = [
    {
        empId:100,
        empName:'Hari'
    },
    {
        empId:200,
        empName:'Vishnu'
    },
    {
        empId:300,
        empName:'Kavya'
    }
]
console.log(employees[0]);//to get first elem
console.log(employees[0].empName);//to get first empname

//task loop array of objects using for-of
for(let em of employees){
    //console.log(em);//to get all
    console.log(em.empName);//to get only empname
    //console.log(em.empId);
}

//Nested object
let laptop={
    brand:'Lenovo',
    price:25000,
    color:"Grey",
    specification:{
        storage:400,
        RAM:1500
    }
}
console.log(laptop.specification.RAM);//call parent object first then child object


//array and function inside object
let HPLaptop={
    brand:"HP",
    isOfferProduct:true, //boolean also possible as a property
    colors:['black','white','silver'], //array given as property
    //function inside object also possible
    details:function(){
        console.log(this.brand); //this keyword to denote current object
        console.log(this.isOfferProduct);
    }
}
console.log(HPLaptop.colors);
console.log(HPLaptop.colors[1]);
console.log("-----------function call-----------------")
HPLaptop.details();


//JSON object javascript object notation
//in key-value pair


