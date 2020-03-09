
// <i class="fas fa-eye-slash"></i>




// Chap password => Texte


var PsswrdText = document.querySelector('input.tip-password');
var switchPssrdText = document.querySelector('div.password-text');

switchPssrdText.addEventListener('click', function () {
    if (PsswrdText.getAttribute('Type') == 'text') {
        PsswrdText.setAttribute('type', 'password');
    }
    else {
    PsswrdText.setAttribute('type', 'text');}
})


