//Encapsulation
//It is data hiding/wrapping of data

class BankAccount{
    #balance; //to declare as private put #
    userName; //global variable
    constructor(currentBalance,userName){
        this.#balance=currentBalance;
        console.log("current balance: ",currentBalance);
        this.userName=userName;
    }
    deposit(depositAmount){
        console.log("deposit amount:",depositAmount);
        //this.#balance+=depositAmount;
        this.#balance=this.#balance+depositAmount;
        console.log("balance after deposit:",this.#balance);
    }
    withDraw(withdrawAmount){
        console.log("withdrawn amount:",withdrawAmount);
        //this.#balance-=withdrawAmount;
        this.#balance=this.#balance-withdrawAmount;
        console.log("balance after withdrawal:",this.#balance);
    }
    showBalance(){
        return this.#balance;
    }
}
const bObj=new BankAccount(1000,"Mintu");
console.log("username:",bObj.userName);
bObj.deposit(2000);
bObj.withDraw(500);
bObj.deposit(1000);
console.log("showbalance: ", bObj.showBalance());
//console.log("balance:",bObj.#balance); //since it is private variable cannot be accessed outside class