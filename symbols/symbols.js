// Symbols
// generates a unique and different primitive
const sym1 = Symbol('My identifier');
console.log("symbol is: ",sym1);
console.log(typeof sym1);

// every symbol is unique
const sym2 = Symbol('Sid');
const sym3 = Symbol('Sid');
// sym2 and sym3 may look same but they are different

// let a = 123;
// let b = "123";

// if(a==b)
// console.log("a and b are same");

// if(!(a===b))
// console.log("a and b are not same");

if(sym2 === sym3)
console.log("Same");
else
console.log("Not same");

const  k1 = Symbol('animalType');
const  k2 = Symbol('animalType');

let myObj = {};

myObj[k1] = 'Kitty';
myObj[JSON.stringify(k2)] = 'Puppy';
myObj["name"] = "Sidharth";
myObj[4] = "number";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);

console.log("\n");

// but symbols are ignored in for-in loop
for(key in myObj){
    console.log(key,myObj[key]);
}