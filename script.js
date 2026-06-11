const stars=document.getElementById('stars');

for(let i=0;i<600;i++){

const star=document.createElement('div');

star.className='star';

const size=Math.random()*3+1;

star.style.width=size+'px';
star.style.height=size+'px';

star.style.left=Math.random()*100+'%';
star.style.top=Math.random()*100+'%';

star.style.animationDelay=Math.random()*3+'s';

stars.appendChild(star);


function createShootingStar(){

const star = document.createElement("div");

star.classList.add("shooting-star");

const size = Math.random()*250+150;

star.style.width = size + "px";

star.style.top = Math.random()*50 + "%";

star.style.left = "-300px";

document.body.appendChild(star);

star.animate([
{
transform:"translate(0,0) rotate(25deg)",
opacity:1
},
{
transform:"translate(2200px,1000px) rotate(25deg)",
opacity:0
}
],{
duration:3000,
easing:"linear"
});

setTimeout(()=>{
star.remove();
},3000);

}

setInterval(createShootingStar,800);
star.animate(
[
{
transform:'translate(0,0) rotate(25deg)'
},
{
transform:'translate(2000px,900px) rotate(25deg)'
}
],
{
duration:2500,
easing:'linear'
}
);

setTimeout(()=>{
star.remove();
},2500);

}

setInterval(createShootingStar,1000);

function createShootingStar() {
  const star = document.createElement("div");

  star.style.position = "fixed";
  star.style.top = Math.random() * window.innerHeight * 0.5 + "px";
  star.style.left = "-200px";

  star.style.width = "200px";
  star.style.height = "3px";

  star.style.background =
    "linear-gradient(to right, white, rgba(255,255,255,0))";

  star.style.boxShadow =
    "0 0 10px white, 0 0 20px white, 0 0 40px white";

  star.style.transform = "rotate(25deg)";
  star.style.zIndex = "99999";

  document.body.appendChild(star);

  let pos = -200;

  const interval = setInterval(() => {
    pos += 20;

    star.style.left = pos + "px";
    star.style.top =
      parseFloat(star.style.top) + 8 + "px";

    if (pos > window.innerWidth + 300) {
      clearInterval(interval);
      star.remove();
    }
  }, 16);
}

setInterval(createShootingStar, 1000);
