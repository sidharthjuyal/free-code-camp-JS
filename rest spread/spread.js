let arr = [1,2,3,4];

function sum(name,...args){  //rest operator
    let sum = 0;
    for(i of args)
    sum+=i;
    console.log(sum);
}

sum("sid",1,2,3,4);
// but what if u pass an array?
sum("sid", arr);
// to escape this use spread operator
console.log("lets see: ");

// this is spread operator in function call
sum("sid", ...arr);

console.log(...arr);


let test1 = [1,2];
let test2 = [3,4];
let array = [5,...test1,...test2,65]; 
console.log(array);


let myObj1 = {
    name:"sid",
    course:"C++"
}
let myObj2 = {
    age:"21"
}
let myObj3 = { ...myObj1, ...myObj2 }
console.table(myObj3);
 