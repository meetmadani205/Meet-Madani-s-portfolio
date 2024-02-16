alert("Hello there! Welcome to Meet Madani's portfolio!");


var typed = new Typed('#typed', {
    strings: ['Web devlopment.','&amp;Java programming' ,'&amp;DSA.','&amp;Problem solving.'],
    typeSpeed: 50,
  });


let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");

toggle.addEventListener('click', () => {
  ul.classList.toggle('vcl-r');
  nav.classList.toggle('hofnav-r');
  
})
