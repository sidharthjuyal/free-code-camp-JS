//  only matches if string starts with Hel;
// let regex = /^Hel/;

// only matches if the string ends with al;
// let regex = /al$/;

// matches any one character
// let regex = /sidh.rth/;

// matches 0 or more characters
// let regex = /s*rth/;

// if you want to search * or special characters use backslash
let regex = /sid\*h/;

let str = "Hello My name is sidharth Juyal, sid*h";

if(regex.test(str))
    console.log("Found!");
    else
    console.log("Not found!");

