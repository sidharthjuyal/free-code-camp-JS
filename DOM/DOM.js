let a = document.getElementsByClassName("child");

// a is not an array of childs
// to make it an array we use Array.from(a)
Array.from(a).forEach(function(element){
    element.innerHTML = " child numbers removed!";
})
console.log(a);


let b = document.links;

Array.from(b).forEach(function(element,index){
    if(index%2!=0)
      element.innerHTML = " child numbers removed!";
})
console.log(b[0]);