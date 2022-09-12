// promise -> i will complete javascript
// resolve
// reject
// pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Promise resolved!");
                resolve("yes Fulfilled");
            }
            else {
                console.log("Promise has not been resolved!");
                reject("sorry not fulfilled!");
            }
        }, 2000);
    })
}

// if promise gets resolved then func1.then() gets executed
// resolve("your message") = then(function(string));
// if promise doesnt gets resolved func1.catch() gets executed
// reject("your message") = catch(function(string));

func1().then(function(string){
    console.log("Sidharth: Thanks for resolving!");
    console.log(string);
}).catch(function(string){
    console.log("Sidharth: very bad bro!");
    console.log(string);
});

let error = false;
// we use promises as a substitute for callback function
// refer to callback example
const students = [
    {name:"Sid",subject:"web development"},
    {name:"Ansh",subject:"Data Analytics"}
]

function enrollStudents(student){
    return new Promise(function(resolve, reject){
    setTimeout(function(){
       students.push(student);
       console.log("student has been enrolled");
       if(!error)
       resolve();
       else
       reject();
    },1000); 
   })
}

function getStudents(){
    setTimeout(function(){
       let str = "";
       students.forEach(function(student){
        str+=`<li>${student.name}</li>`
       });
       document.getElementById('students').innerHTML = str;
    },500);
}

let newStudent = {name:"Akash",subject:"java"};
enrollStudents(newStudent).then(function(){
    getStudents();
}).catch(function(){
   console.log("some error occured"); 
});

