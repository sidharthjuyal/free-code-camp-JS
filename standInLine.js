// stringify
let array = [1,2,"sid"];
console.log("before: ", array);
console.log("after: ",JSON.stringify(array));

// stand in line, when one goes out another comes in

let arr = [1,2,3,4,5]; 
function nextInLine(arr, item)
{
    arr.push(item);
    arr.shift();
}
console.log("\nbefore: ", arr);
nextInLine(arr,6, JSON.stringify(arr));
console.log("after: ",JSON.stringify(arr));