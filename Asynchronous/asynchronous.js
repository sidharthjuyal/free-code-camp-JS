/* ways to write asynchronous programming in js
-> Async/Await
-> callbacks
-> promises
*/

/*
Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.

Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.
*/

console.log("hello");
setTimeout(() => {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
},1000); //milliseconds as a setTimeout parameter
console.log("Bye!");

/*
At first, as usual, the "hello" statement got logged in. As we use browsers to run JavaScript, there are the web APIs that handle these things for users. So, what JavaScript does is, it passes the setTimeout function in such web API and then we keep on running our code as usual. So it does not block the rest of the code from executing and after all the code its execution, it gets pushed to the call stack and then finally gets executed. This is what happens in asynchronous JavaScript.
*/