//class
//inside the class we can define properties and methods need to define the type of properties and return type of methods
class Fruits
{
    name: string;
    price: number;

    constructor(name:string, price:number){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log("Fruit name:",this.name);
        console.log("Fruit price:",this.price);
    }
}
const fruit=new Fruits("Apple",200);
fruit.display();