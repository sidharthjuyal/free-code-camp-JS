const btn = document.querySelector("#btn");
const article = document.querySelector("#article");

btn.addEventListener('click',()=>{
    article.classList.toggle('show');
});