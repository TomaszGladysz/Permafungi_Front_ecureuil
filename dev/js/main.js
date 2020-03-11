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


// // TESTETSTETSETESTETS
// // TESTETSTETSETESTETS
// // TESTETSTETSETESTETS

// let targetURL = "URL API"; 
// let xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', function (event){
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let json =JSON.parse(xhr.responseText);


//         //USER INFO
//             let userName = document.querySelector('.userName');
//             let userRole = document.querySelector('.userRole');
//             // let userPicture = document.querySelector('.userPicture');
//             let userLocation = document.querySelector('.userLocation');
//             let userEmail = document.querySelector('.userEmail');
//             let userBirthdate = document.querySelector('.userBirthdate');
//             // let userBio = document.querySelector('.userBio');
            
//         //TASK INFO
//             let taskTitle = document.querySelector('.taskTitle');
//             let taskDesc = document.querySelector('.taskDesc');
//             let taskCreationDate = document.querySelector('.taskCreationDate');
//             let taskDeadline = document.querySelector('.taskDeadline');
//             let taskCreator = document.querySelector('.taskCreator');
//             // let taskImage = document.querySelector('.taskImage');
                   
// ///TEXT_CONTENT

//         //USER
//            userName.textContent = dataJSON.FirstName + " " + dataJSON.lastName;
//            userRole.textContent = dataJSON.Role;
//             //    userPicture.textContent = dataJSON.NOM_JSON;
//            userLocation.textContent = dataJSON.WorkPlace;
//            userEmail.textContent = dataJSON.Email;
//            userBirthdate.textContent = dataJSON.BirthDate;
//             //    userBio.textContent = dataJSON.NOM_JSON;
           
//         //TASK
//             taskTitle.textContent = dataJSON.Title;
//             taskDesc.textContent = dataJSON.Desctiption;
//             taskCreationDate.textContent = dataJSON.CreationDate;
//             taskDeadline.textContent = dataJSON.Deadline;
//             taskCreator.textContent = dataJSON.User;
//             // taskImage.textContent = dataJSON.NOM_JSON;
          
//     } else {
//         console.log("hahaha.non")
//     }})

// // TESTETSTETSETESTETS
// // TESTETSTETSETESTETS
// // TESTETSTETSETESTETS




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
