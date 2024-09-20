const navBtn = document.querySelector('#menu-icon');
const mainMenu = document.querySelector('.main-menu');
const navBar = document.querySelector('.navbar');

navBtn.addEventListener('click',()=>{
navBtn.classList.toggle('active');
navBar.classList.toggle('active');
mainMenu.classList.toggle('active');
})







function holaPuta() {
    alert("Puta")
}