//Exceptions are special type of errors
function division(num1, num2) {
    //div by zero not possible
    if (num2 === 0) {
        throw new Error("Division by zero not possible");
    }
    return num1 / num2;
}

//try, catch, finally are keywords used for exception handling

//try handles risky code, catch handles error, finally executes irrespective of try and catch
try {
    let result = division(10, 5);
    console.log("result is:", result);
    console.log("Program completed");
} catch (error) {
    console.log("-----exception-----");
    console.log("error message is:", error.message);
    //error.message is what we pass in throw new Error("Division by zero not possible");
}
//finally block is optional, it executes irrespective of try and catch
//error vannalum illelum finnally execute cheyyum
finally {
    console.log("Execution completed");
}
