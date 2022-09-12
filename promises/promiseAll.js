// let p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("first promise resolved: ");
//         resolve(10);
//     }, 1*1000);
// });

// let p2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("second promise resolved: ");
//         resolve(20);
//     }, 2*1000);
// });

// let p3 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("third promise resolved: ");
//         resolve(30);
//     }, 3*1000);
// });

// let p4 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("error occurred!");
//     }, 4*1000);
// });

function promiseCall(result, message) {
    return function (response, reject) {
        setTimeout(() => {
            console.log(`${message} promise resolved!`);
            response(result);
        }, result * 100);
    }
}

function failedCall(result, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(`${message} promise not resolved!`);
            reject("error occurred!");
        }, result * 100);
    }
}

let p1 = new Promise(promiseCall(10, "first"));
let p2 = new Promise(promiseCall(20, "second"));
let p3 = new Promise(promiseCall(30, "third"));
let p4 = new Promise(failedCall(40, "fourth"));


Promise.all([p1, p2, p3, p4]).then((result) => {
    let total = 0;
    for (i of result) total += i;

    console.log("Results are: ", result);
    console.log("Total is: ", total);
}).catch((error) => {
    console.log(error);
});