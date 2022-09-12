// For-of loop
people = ['teetu','rohan','skill','yoyo'];

for(let name in people){
    console.log(name);
}

for(let name of people){
    console.log(name);
}
// for-of is same as this ->
for(let name in people){
    console.log(people[name]);
}

