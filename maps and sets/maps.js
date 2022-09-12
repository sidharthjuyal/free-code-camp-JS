// maps is js: we can use asny type of key & value
const map = new Map();
const key1 = 'name', key2 = {}, key3 = function(){};
console.table(map);
console.log(map.size);

// setting map values
map.set(key1,'sid!');
map.set(key2, 'blank object');
map.set(key3, 'empty function');
console.table(map);
console.log(map.size);

// get values
let value1 = map.get(key1);
console.log(value1);

// iteration  for-of loops
for(let [key,value] of map){
    console.log(key,value);
}
// only key
for(let key of map.keys()){
    console.log(key);
}
// only values
for(let value of map.values()){
    console.log(value);
}


// for-each loop
map.forEach((value,key)=>{
console.log("key: "+key+", value: "+value);
});

// converting map to array
let arr = Array.from(map);
console.log(arr);
// converting map to array of keys
arr = Array.from(map.keys());
console.log(arr);
// converting map to array of values
arr = Array.from(map.values());
console.log(arr);