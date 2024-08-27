


var typed = new Typed('#typed', {
    strings: ['Web devlopment.','Java programming.' ,'DSA.','Problem solving.'],
    typeSpeed: 90,
    backspeed : 90,
    backdelay : 800,
    loop : true,
  });


let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let menuIcon = document.querySelector("#menu-icon");

toggle.addEventListener('click', () => {
  ul.classList.toggle('vcl-r');
  nav.classList.toggle('hofnav-r');
  
})

menuIcon.addEventListener('click',  () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    header.classList.toggle('scroll', navbar.classList.contains('active'));
})
