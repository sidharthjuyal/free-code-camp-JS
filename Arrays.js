// Array
let array = ["sid", 21];

// nested Array
let Nested = [["Ayush",20],["Anurag",21]];

// accessing data with variables 
// printed first array inside nested array
console.log(Nested[0]);
// printed the first element of the first array inside the nest
console.log(Nested[0][0]);
// printing the first character of the first element of the first array inside the nest
console.log(Nested[0][0][0]);

// modify data
array[0]="kid";
console.log(array);


// multidimensional arrays
let multi = [[1,2],[3,4],[5,6]];
let data = multi[1][0];
console.log(data);

