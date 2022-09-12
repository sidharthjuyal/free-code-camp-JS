let reg = /sidharth/; 
// this is a regular expression literal in js

reg = /sidharth/g; //g means global
// now if you call exec multiple times it will give different pos'n of the reg value in the str

// reg = /sidharth/i;
// now your search is case sensitive! 

console.log(reg);
console.log(reg.source);

let str = "my name is sidharth juyal, and sidharth is a good guy";
// functions to match expressions
// 1. exec() - this function will return an array for match or null for no match.

let result = reg.exec(str);

if(result){  //if result is not null print this
console.log(result.index);
result = reg.exec(str);
console.log(result.index);
console.log(result.input);
result = reg.exec(str);
console.log(result);
}

let result2 = reg.test(str);
console.log(result2);
// 2. test() = check if reg is present in str or not

let result3 = str.match(reg); // right implementation
// let result3 = reg.match(str);  wrong implementation
console.log(result3);
// 3. match()
// if reg = /sidharth/i;
// the only one 'sidharth' will print, the first one
// id reg = /sidharth/g;
// then array of all occurences of sidharth will print


let result4 = str.search(reg);
console.log(result4);
// 4.search() - first index or -1;


let result5 = str.replace(reg,"sid");
console.log(result5);
// 5. replace() - replace all the occurence of the str of reg if reg=/sidhath/g;
// if reg = /sidharth/i; then replace only first;
