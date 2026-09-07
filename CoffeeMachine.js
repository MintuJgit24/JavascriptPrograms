//Abstraction
//hiding implementation of functions show only user needed datas

class CoffeeMachine{
    //private methods need #
    #boilWater(){
        console.log("water boiling");
    }
    #addCoffeePowder(){
        console.log("coffee powder added");
    }
    #addTeaPowder(){
        console.log("tea powder added");
    }
    #addMilk(){
        console.log("milk addedd");
    }
    makeCoffee(){
        //to call private methods inside public method use this keyword
        this.#boilWater();
        this.#addCoffeePowder();
        this.#addMilk();
    }
    makeTea(){
        this.#boilWater();
        this.#addTeaPowder();
        this.#addMilk();
    }
}
const coff=new CoffeeMachine();
coff.makeCoffee();
coff.makeTea();
