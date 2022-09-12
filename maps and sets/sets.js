const set = new Set();
// set stores unique values
set.add('this');
set.add('this');
set.add('my name');
set.add(1);
// set size is still 2 as it doesnt store duplicate values
console.log(set);


const set1 = new Set(['this','this',34,true,{a:4,b:8}]);
console.log(set1);
console.log(set1.size);
console.log(set1.has('this'));
console.log(set1.has(344));

// set remove element
set1.delete(true);
console.log(set1);

// iteration
// for of
for(let keys of set1){
    console.log(keys);
}
// forEach
set1.forEach((keys)=>{
     console.log(keys);
});

let arr = Array.from(set1);
console.log(arr);

