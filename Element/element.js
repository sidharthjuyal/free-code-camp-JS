// creating element
let element = document.createElement('p');
element.innerText = "<b>element</b>";
// element.innerHTML = "<b>Hi! Iam a paragraph!</b>";
/* see the difference by commenting out
   if u want to apply some inner HTML use innerHTML */
element.className = "para";
element.id = "myPara";
element.setAttribute('style','color:red;');


// append the element to ur html
let container = document.querySelector('.container');
container.appendChild(element);


// replace an element
// container.replaceChild(element, document.getElementById("para2"));
// or you can use
 let para = document.getElementById("para2");
 para.replaceWith(element);


//  remove child
// container.removeChild(element);
container.removeChild(document.getElementById("para1"));

// important
let a = element.getAttribute('class');
console.log(a);  // para
let b = element.hasAttribute('class');
console.log(b); // true or falselet 
c = element.removeAttribute('class');
b = element.hasAttribute('class');
console.log(b); // true or false



let head = document.createElement('h1');
head.innerText = "Iam header";
container.appendChild(head);

let link = document.createElement('a');
link.innerText = "click me!";
link.setAttribute('target','_blank');
link.setAttribute('href','https://www.youtube.com/');
container.appendChild(link);


