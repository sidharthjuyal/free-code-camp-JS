let counter = 0;

let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let content = document.getElementById("value");

decrease.addEventListener('click',function(){
    counter--;
    value.innerHTML = counter;
});

reset.addEventListener('click',()=>{
    counter=0;
    value.innerHTML = counter;
});

increase.addEventListener('click',()=>{
    counter++;
    value.innerHTML = counter;
});

