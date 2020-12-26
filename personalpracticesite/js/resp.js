var burger = document.querySelector(".burger");
var navList = document.querySelector(".nav-list");
var navbar = document.querySelector(".navbar");
var rightNav = document.querySelector(".rightNav");


burger.addEventListener('click', ()=> {
navList.classList.toggle("v-class-resp");
rightNav.classList.toggle("v-class-resp");
navbar.classList.toggle("h-nav-resp");
})