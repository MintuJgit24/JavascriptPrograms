//call back hell-function called inside another function so on..like a nested loop
//not used much due to difficulty in maintance, error handling, debugging
//so we use Promise concept
function test() {
    return new Promise((resolve, reject) => {
        console.log("test func call");
        resolve();
    })
    //cb();
}
function demoTest() {
    return new Promise((resolve, reject) => {
        console.log("demoTest func call");
        resolve();
    })
    //cb1();
}
function demoTest2() {
    return new Promise((resolve, reject) => {
        console.log("demoTest2 func call");
        resolve();
    })
}

//callback hell/pyramid doom
/*
test(function(){
    demoTest(function(){
        demoTest2()
    })
})
*/

//resolve for .then and reject for .catch
test().then(() => demoTest()).then(() => demoTest2()).catch((error) => console.error("error occured", error))



//promise-a javascript object
//it has 3 states-fullfilled(ok completed, resolved, got result), rejected(not ok failed), pending(waiting)
//used for asynchronous operations
//resolve, reject are parameters
//promise object created

/*
const promise = new Promise((resolve, reject) => {
    let abc = true;
    if (abc) {
        resolve("operation successfull")
    }
    else {
        reject("operation failed")
    }
})

promise.then((msg) => {
    console.log(msg);
})
    .catch((errMsg) => {
        console.log(errMsg);
    })

*/
