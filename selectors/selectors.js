// by ID
let header = document.getElementById("head");
header.style.backgroundColor = "red";

// by class
let elements = document.getElementsByClassName("child");
Array.from(elements).forEach(function(element){
    element.style.backgroundColor = "mediumseagreen";
});

// querySelector (selects first query)
let link = document.querySelector("a");

link.style.textDecoration = "none";
link.style.color = "orange";

// querySelectorAll (selects all queries)
let links = document.querySelectorAll("a");

Array.from(links).forEach(function(element){
    element.style.textDecoration = "none";
    element.style.color = "orange";
});

// childNodes
let buckets = document.querySelector(".bucket");
console.log(buckets.childNodes);
console.log(buckets.children);
console.log(buckets.firstChild);
console.log(buckets.firstElementChild);
console.log(buckets.lastChild);
console.log(buckets.lastElementChild);
console.log(buckets.lastElementChild.parentElement);  
// parentNode is same as parentElement

// traversing
console.log(buckets.lastElementChild.children[1]);
console.log(buckets.firstChild.nextSibling);
console.log(buckets.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);

let Name = buckets.childNodes[5].nodeName;
let Type = buckets.childNodes[5].nodeType;
/*
values -> NODE TYPES

1 -> element
2 -> attribute
3 -> text 
4 -> comment
5 -> document
6 -> docType
*/
console.log(Name);
console.log(Type);



