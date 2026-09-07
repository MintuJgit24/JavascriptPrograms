//inheritance-from one class properties and behaviours can be inherited to another class
//IS-A relationship
//parent class

export class VehicleInheritance{
    //variable access normally
    demo="Parent variable";
    //variable access using constructor
    constructor(price, brand){
        this.price=price;
        this.brand=brand;
    }
    start(){
        console.log("vehicle started");
    }
}

