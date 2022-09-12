// active link page
const activePage = window.location.href;
const navlinks = document.querySelectorAll('nav a');

navlinks.forEach(link =>{
   if(link.href == activePage)
   link.classList.add('active');
});