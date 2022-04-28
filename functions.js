console.clear();

// global scoping and functions
var global = 10;

function fun1(){
    let local = 5;
    // local scope
}
function fun2(){
    if(typeof global != 'undefined')
    console.log("Global variable: "+ global);

    if(typeof local != 'undefined')
    console.log("Global variable: "+ local);
}
fun1();
fun2();


// function practice
function ourReusableFunction() {
    console.log("heyoooo, my bro!");
}
ourReusableFunction();


function reusableFunction() {
    console.log("heyoooo, my pal!");
}
reusableFunction();

// passing values
function sum(a,b)
{
    console.log(a+b);
}
sum(2,31);
