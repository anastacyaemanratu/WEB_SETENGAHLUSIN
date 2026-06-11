const stars=document.getElementById('stars');

/* BINTANG */

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

}

/* BINTANG JATUH */

function createShootingStar(){

const star=document.createElement('div');

star.className='shooting-star';

star.style.width=(Math.random()*250+100)+'px';

star.style.top=(Math.random()*40)+'%';

star.style.left='-300px';

document.body.appendChild(star);

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
