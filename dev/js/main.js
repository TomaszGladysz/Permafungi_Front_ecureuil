var monBouton = document.querySelector('#toggleMenu');
var monMenuHamburber = document.querySelector('#main_nav');


monBouton.addEventListener('click',function (){
    monMenuHamburber.classList.toggle('visible');
});

monBouton.addEventListener('click',function (){
  monBouton.classList.toggle('active');
});

sousMenu.addEventListener('click',function (){
  monBouton.classList.toggle('active');
});

sousMenu.addEventListener('click',function (){
    monMenuHamburber.classList.toggle('visible');
});
