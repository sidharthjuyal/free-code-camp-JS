localStorage.clear();
let container = document.getElementById("container");
 container.addEventListener('click',function(){
    let text = prompt("Enter a text: ");
    let div = document.createElement("div");
    div.innerText = text;
    container.appendChild(div); 
    localStorage.setItem('text',text);
 });