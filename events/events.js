let btn = document.getElementById("btn");

btn.addEventListener('click',function(){
     alert('clicky clicky!');
});

document.querySelector(".container").addEventListener('mouseenter',function(){
   console.log('you moved in');
});

document.querySelector(".container").addEventListener('mouseleave',function(){
   console.log('you moved out');
});

document.querySelector(".container").addEventListener('mousemove',function(e){
   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX + e.offsetY})`;
});
