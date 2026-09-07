//child class
import { FruitPoly } from "./FruitPoly.js";

class OrangePoly extends FruitPoly{
    display(){
        console.log("orange method");
    }
}
const oraObj=new OrangePoly();
oraObj.display();

const fruObj=new FruitPoly();
fruObj.display();