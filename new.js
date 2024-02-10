
alert("Welcome to Meet Madani's portfolio!");

let btn = document.querySelector("#js");
let mode = "light";
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let foot = document.querySelector("footer");
let fofoot = document.querySelector("#foot");
let an = nav.getElementsByTagName("a");
let line = document.getElementsByTagName("hr");

btn.addEventListener('click',() =>
{
    if(mode=="light")
    {
        body.style.backgroundColor = "black";
        btn.innerText = "Turn to light mode";
        mode = "dark";
        body.style.color = "white";
        nav.style.backgroundColor = "white";
        foot.style.backgroundColor = "white";
        fofoot.style.color = "black";
        for(var i=1;i<an.length;i++)
        {
          an[i].style.color = "black";
        }
        line.style.border = "1 px solid white";
    }
    else
    {
      body.style.backgroundColor = "white";
      btn.innerText = "Turn to dark mode";
      mode="light";
      body.style.color = "black";
      nav.style.backgroundColor = "black";
      foot.style.backgroundColor = "black";
      fofoot.style.color = "white";
      for(var i=1;i<an.length;i++)
        {
          an[i].style.color = "white";
        }
        line.style.border = "1 px solid black";
    }
    }

)

{
  var typed = new Typed('#typed', {
    strings: ['Web devlopment.', '&amp;DSA.','&amp;Problem solving.'],
    typeSpeed: 50,
  });
}