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