let links = document.links;
let link = "www.instagram.com";

// search return index or -1 if string is inside or not respective
Array.from(links).forEach(function(element){
    if(element.href.search(link) != -1)
    console.log(element.href);
});

console.log(typeof links[0].href);


// includes return true or false if string is inside or not
Array.from(links).forEach(function(element){
    if(element.href.includes(link))
    console.log(element.href);
});
