const btn = document.querySelector('#btn');
const items = document.querySelector('ul');

btn.addEventListener('click',()=>{
    items.classList.toggle('show-links');
})