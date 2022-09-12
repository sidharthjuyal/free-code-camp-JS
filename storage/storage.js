/*   localStorage */

// to set the item in a key-value pair
// localStorage.setItem('Name','Sid');
// localStorage.setItem('Name2','Rohan');

console.log(window.localStorage.Name);
console.log(window.localStorage.Name2);

// to get the pre-existing item
let Num = localStorage.getItem('Name2');
// same functionality like line 6
console.log(Num);
// remove item
localStorage.removeItem('Name2');
Num = localStorage.getItem('Name2');
console.log(Num);   // Name2 removed

// want to clear the entire local storage?
// localStorage.clear();

// how to store array in local storage?
let arr = ['sid','kid','lid','did'];
// localStorage.setItem('array', JSON.stringify(arr));
let lister = localStorage.getItem('array');
console.log(typeof lister); // string
// but we dont want string, we want array then?
lister = JSON.parse(localStorage.getItem('array'));
console.log(lister);
console.log(typeof lister);  //now it is array


/* sessionStorage */
//  local storage and session storage is same in syntax
// the difference is that session storage does not store permamnently
// while local storage saves it permanently in browsers local storage

// sessionStorage.setItem('Name3','pawpaw');
// check this out by closing tab and reopening that tab