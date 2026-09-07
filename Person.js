class Person{
    constructor(name, age, place,date){
        this.name=name;
        this.age=age;
        this.place=place;
        this.date=date;
    }
    introduce(){
        console.log("Hi i am "+this.name);
        console.log("i am "+this.age+" years old");
        console.log("i am from "+this.place);
        console.log("joining date "+this.date);
    }
}
const person1=new Person("Kevin",25,"Kochi",new Date("02/05/1990"));
//Date is inbuilt function
person1.introduce();

const person2=new Person("Emma",23,"Chennai",new Date("12/06/2000"));
person2.introduce();
