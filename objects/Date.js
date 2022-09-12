let today = new Date();
console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
let anotherDate = new Date('april 30 2001');
// mm-dd-yyyy
console.log(otherDate);
console.log(anotherDate);

console.log(anotherDate.getDay());
/*
0 sun, 1 mon, 2 tue...
*/
console.log(anotherDate.getDate());

console.log(otherDate.getMilliseconds());
console.log(otherDate.getSeconds());
console.log(otherDate.getMinutes());
console.log(otherDate.getHours());

console.log(otherDate.getTime());
// gives the number of seconds since 1 jan 1970

// setting dates
otherDate.setDate(23);
otherDate.setMonth(0);
// sets one month ahead
otherDate.setFullYear(1900);
otherDate.setMinutes(1);
otherDate.setHours(2);
otherDate.setSeconds(3);

console.log(otherDate);

