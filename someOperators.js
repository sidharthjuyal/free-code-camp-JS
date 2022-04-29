/* EQUALITY OPERATOR */

function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not equal";
}
console.log(testEqual(10));


// strictly equal
function testEquality1(){
    // using two equals(equality operator) performs automatic type conversion to compare values
    if(3 == '3'){
    return "true hai!";
    }
    return "false hai";
}
console.log(testEquality1());
// 3 and '3' are different but still the answer is true.
function testEquality2(){
    // strict equality
    if(3 === '3'){
    return "true hai!";
    }
    return "false hai!";
}
console.log(testEquality2());
// 3 and '3' are different and the answer is false.


/* INEQUALITY OPERATOR */

function testNotEqual1(val){
    if(val!= 12){
        return "Not Equal";
    }
    return "equal";
}
console.log(testNotEqual1('12'));  //see
// strictly not equal
function testNotEqual2(val){
    if(val!== 12){
        return "Not Equal";
    }
    return "equal";
}
console.log(testNotEqual2('12'));  //see

// and there are some more relational operators like, >, <, >=, <= etc. 
// logical operators && and ||