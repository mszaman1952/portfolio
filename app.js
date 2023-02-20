"use strict"

const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');

bars.addEventListener('click',function(){
    nav.classList.toggle('navs');
    bars.classList.add('fa-barss');
    xmark.classList.toggle('fa-xmarks')
});
xmark.addEventListener('click',function(){
    nav.classList.remove('navs');
    bars.classList.remove('fa-barss');
    xmark.classList.remove('fa-xmarks')
})

window.addEventListener('scroll', function(){
    header.classList.toggle('headers', window.scrollY > 0); 
});


function animText (){
    const secText = document.querySelector('.sec-text');
    const sText = document.querySelector('.sectext');
    setTimeout( function () {
        secText.textContent = 'Web Developer';
        sText.textContent = 'Web Developer';
    }, 0);
    setTimeout( function ()  {
        secText.textContent = 'Freelancer';
        sText.textContent = 'Freelancer';
    }, 4000);
    setTimeout(function ()  {
        secText.textContent = 'Blogger';
        sText.textContent = 'Blogger';
    }, 8000);
}
animText();
setInterval(function ()  {
    animText();
}, 12000);


const showHide = document.querySelector('.showHide');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    showHide.classList.toggle('showHideVisiable');
    if(btn.innerHTML == 'Read More'){
        btn.innerHTML = 'Reda Less';
    }
    else{
        btn.innerHTML = 'Read More';
    }
});

const bottom = document.querySelector('.bottom');
console.log(bottom);

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100){
    bottom.classList.add('bottoms');
  }
  else{
    bottom.classList.remove('bottoms');
  }
});










