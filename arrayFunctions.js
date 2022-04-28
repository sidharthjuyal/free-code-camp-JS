/* push() */
// add element at end
let array = ["sid","kid"];
array.push(["lid","jid"]);
console.log(array);
let array1 = ["john",21];
array1.push("hello");
console.log(array1);

/* pop() */
// remove element from end
let array2 = ["sid","kid"];
array2.pop()
console.log(array2);

let array3 = ["john",21,"hello"];
array3.pop();
console.log(array3);

/* shift() */
// removes first element
let array4 = ["sid","kid"];
array4.shift()
console.log(array4);

let array5 = [["john",21],["hello",23]];
array5.shift();
console.log(array5);

/* unshift() */
// add element at the front
let array6 = ["sid","kid"];
array6.unshift("sidharth")
console.log(array6);

let array7 = [["john",21],["hello",23]];
array7.unshift(["sidharth", 20]);
console.log(array7);



