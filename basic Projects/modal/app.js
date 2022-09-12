const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const modal = document.querySelector(".black-cont");

btn1.addEventListener('click',()=>{
    modal.classList.add('show');
});

btn2.addEventListener('click',()=>{
    modal.classList.remove('show');
});