// let regex = /\wdh/;  //one word character: _ or alphabet or number

// let regex = /\w+dha/  //multiple word character ahead dha (si)

// let regex = /\Wju/;  //non word characters (capital W)

// let regex = /\W+juy/;  //more than one non word characters

// let regex = /\d999/;  //one number

// let regex = /\d+999/;  //more than one number
// similarly \D is non digit and \D+ is more than one non digit

// similarlt \s gives true for one space and \s+ fore more spaces
// similarlt \S gives true for one non white- space and \S+
//  for more spaces

// assertions
// let regex = /S(?=i)/;  //S ke baad i hai kya?
let regex = /S(?!i)/;  //S ke baad i na ho!
let str = "Sidharth @%juyal 788999";

let result = regex.exec(str);
console.log(result);

if(regex.test(str))
console.log("Found!");
else
console.log("Not found!");