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




// TESTETSTETSETESTETS
// TESTETSTETSETESTETS
// TESTETSTETSETESTETS

for (var i = 1 ; i<10 ; i++ ){


let targetURL = "URL API"; 
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function (event){
    if (xhr.readyState == 4 && xhr.status == 200) {
        let json =JSON.parse(xhr.responseText);
        // console.log(json.results[0].poster_path);


            let task = document.querySelector('.wrapper');

            let title = document.querySelector('h1');
            let rating = document.querySelector('h2');
            let poster = document.querySelector('img');
            let imageWrap =document.querySelector('div');
            let description = document.querySelector('p');
            let filmWrap = document.querySelector('div');

            filmWrap.className= 'wrapperMovie';
            imageWrap.className= 'wrapperImage';
            
            wrapper.appendChild(filmWrap);
            filmWrap.appendChild(title);
            filmWrap.appendChild(imageWrap);
            imageWrap.appendChild(poster);
            imageWrap.appendChild(rating);
            imageWrap.appendChild(description);
            
        }
         

    }
})
    xhr.open('GET', targetURL, true);
    xhr.send();
}
  
// TESTETSTETSETESTETS
// TESTETSTETSETESTETS
// TESTETSTETSETESTETS




//////CHRISTOPHE JS/////////

var PsswrdText = document.querySelector('input.tip-password');
var switchPssrdText = document.querySelector('div.password-text');
var indicPassText = document.querySelector('i');

switchPssrdText.addEventListener('click', function () {
    if (PsswrdText.getAttribute('Type') == 'text') {
        PsswrdText.setAttribute('type', 'password');
    }
    else {
    PsswrdText.setAttribute('type', 'text');}

    if (indicPassText.getAttribute('class') == 'fas fa-eye') {
        indicPassText.setAttribute('class', 'fas fa-eye-slash')
    }
    else {
        indicPassText.setAttribute('class', 'fas fa-eye')
    }
})
// Champ password => Texte -> Connexion
// Champ password => Texte -> Inscription


var PsswrdTextInscription = document.querySelector('input.tip-password-inscription');
var switchPssrdTextInscription = document.querySelector('div.password-text-inscription');
var indicPassTextInscription = document.querySelector('div.password-text-inscription > i');

switchPssrdTextInscription.addEventListener('click', function () {
    console.log("OK")
    if (PsswrdTextInscription.getAttribute('Type') == 'text') {
        PsswrdTextInscription.setAttribute('type', 'password');
    }
    else {
        PsswrdTextInscription.setAttribute('type', 'text');}

    if (indicPassTextInscription.getAttribute('class') == 'fas fa-eye') {
        indicPassTextInscription.setAttribute('class', 'fas fa-eye-slash')
    }
    else {
        indicPassTextInscription.setAttribute('class', 'fas fa-eye')
    }
})