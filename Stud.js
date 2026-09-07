//OOPS CONCEPT

//CLASS
//class is a blueprint for creating objects
//class name starts with capital letter
class Stud {
    constructor(name, age){
        //console.log("constructor is called here"); to understand
        //console.log(name);
        this.name=name;
        this.age=age;
    }
    introduce() { //method or function
        console.log("Hi my name is "+ this.name);
        console.log("age is "+this.age);
    }
    display() {
        console.log("WELCOME ALL");
    }
}

//new Stud().introduce();
//new Stud().display();

//Stud() is constructor
//each time to call method need new object but it need more memory allocation so make it short like this
//need object reference=studObj
const studObj=new Stud("Mintu", 30);
studObj.introduce();
studObj.display();

//constructor is a special method 
//used to allocate values to variables

console.log("--------------second object here------------------")
const studObj2=new Stud("Rahul",45);
studObj2.introduce();
studObj2.display();