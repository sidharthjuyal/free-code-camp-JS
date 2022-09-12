// let regex = /^s/i;  // i = case insensitive

// character sets - []

// matches if character is in [a,e,i,o,u]
// let regex = /s[aeiou]dharth/i;

// return true if character is not in [a,t,y]
// let regex = /s[^aty]d/i;

// let regex = /S[a-z]d/;
// let regex = /S[A-Z]d/;
// let regex = /S[0-9]d/;
// let regex = /S[a-zA-Z]d/;  //multiple like this without space

// quantifiers
// let regex = /Sid{2}harth/;  // d can occur 2 times
let regex = /Sid{0,3}harth/; // d can occur 0,1,2,3 times


const str = "Sidddharth Juyal";
if(regex.test(str))
console.log("Found!");
else
console.log("Not found!");

// grouping

let regex2 = /(sid){2}([0-9]d){3}/;
let str2 = "sidsid1d2d3d";

if(regex2.test(str2))
   console.log("Found!");
   else
   console.log("Not found!");