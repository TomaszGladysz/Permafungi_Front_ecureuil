
// <i class="fas fa-eye-slash"></i>
// Champ password => Texte -> Connexion


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





















// Champ password => Texte
//Envoi fichier
var envoyerPhoto = document.querySelector('input.upload-photo-profil');
var resultatPhoto = document.querySelector('div.apercu-photo')



envoyerPhoto.addEventListener('change', function (e) {

    var imageSrc = envoyerPhoto.value;
    envoyerPhoto.setAttribute('data-image', imageSrc)
    // console.log(envoyerPhoto);
    // console.log(imageSrc);

    apercuPhoto = document.createElement('img');
    apercuPhoto.setAttribute('src', imageSrc);
    resultatPhoto.appendChild(apercuPhoto);
    console.log(apercuPhoto);
})


//Envoi fichier


var defUrgence = document.querySelector('select.def-urgences');
var defUrgenceOptions = document.querySelectorAll('option');

var deadLine = document.querySelector('input.dead-line');


defUrgenceOptions.forEach(Element => {
    Element.addEventListener('change', function () {
        console.log("OK")

})

})

