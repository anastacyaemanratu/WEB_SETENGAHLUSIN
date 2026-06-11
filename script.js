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

/* ==========================
BINTANG JATUH PREMIUM
========================== */

function createShootingStar() {

const star = document.createElement("div");

star.className = "shooting-star";

const startY = Math.random() * 250;

star.style.position = "fixed";
star.style.top = startY + "px";
star.style.left = "-250px";

star.style.width = "180px";
star.style.height = "2px";

star.style.background =
"linear-gradient(to right, white, transparent)";

star.style.borderRadius = "999px";

star.style.boxShadow =
"0 0 8px white, 0 0 20px white";

star.style.zIndex = "9999";

document.body.appendChild(star);

star.animate(
[
{
transform:
"translate(0,0) rotate(25deg)",
opacity:1

setInterval(createShootingStar, 1000);
