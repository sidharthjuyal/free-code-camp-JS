let a,b
[a,b] = [34,564];
console.log(a,b);

[a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10];
// array notation
console.log(a,b,c,d);  
//baki ke array ke form me d me store hogye


console.log('\n');
// object notation
// bracket e bnd krna is important
( {a,b,c,...d} = {a:34, b:45, c:56, d:67, e:78, f:89} );
console.log(a , b, c, d);
// baki ke object form me store hogye d ke andar

console.log('\n');
const fruits = ['apples','bananas','oranges'];
// can give any name to the variables
[a,b,c] = fruits;
console.log(a,b,c);


// object destructuring
const laptop = {
    model: 'ideapad-330s',
    age: '23-days',
    gender:'male',
    net: 1220,
    start: function(){
        console.log('started');
    } 
}

// u have to use the same name as the object keys
let {model,age,gender,net,start} = laptop;
console.log(model,age,gender,net,start);

// we use destructuring to increase readability
// to save lines of code


// difference btw destructuring array and object
let aa = [1,"sid","delhi"];
let[i, k] = aa;
console.log(i,k);

let obj = {
    name:'sid',
    age:1,
    city:'delhi'
}
let{name,city} = obj;
console.log(name,city);

