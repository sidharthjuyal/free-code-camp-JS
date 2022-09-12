function prom(a,b) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching data, please wait...");
        let c = a/b;

        setTimeout(() => {
            if (b!==0)
                resolve(`Your answer: ${c}`/* result */);
            else
                reject("divide by zero error!"/* error */);
        }, 1000);
    });
}

// method chaining
// prom(6,2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

prom(5,0).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})