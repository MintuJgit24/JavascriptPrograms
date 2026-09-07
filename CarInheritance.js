//child class
//need to import parent class for that first export parent class

import { VehicleInheritance } from "./VehicleInheritance.js";

class CarInheritance extends VehicleInheritance {
    constructor(pr,br){
        //call parent constructor using super keyword to access variables/obj of parent class
        super(pr,br);
    }
    engineStart(){
        console.log("Engine started");
    }
    displayDetails(){
        //this keyword to access current class obj
        console.log("Price: ",this.price);
        console.log("Brand: ",this.brand);
        console.log("demo: ",this.demo);
    }
}
const carObj=new CarInheritance(1000,"HP");
carObj.engineStart();
carObj.start();
carObj.displayDetails();

//const vehObj=new VehicleInheritance();
//vehObj.start();