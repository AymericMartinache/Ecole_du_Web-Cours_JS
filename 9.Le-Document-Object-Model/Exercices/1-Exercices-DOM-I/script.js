/*
    1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/
const title = document.querySelector('h1');
title.style.color = 'plum';

/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.
    Deux façons de faire sont possibles.
*/
const p = document.getElementById('subtitle');
console.log(p);

/*
    3. Loggez le texte du troisième <li> dans la console.
*/
console.log(document.querySelector('ul li:nth-child(3)').textContent);

/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/
const img = document.querySelector('img');
console.log('Source : ', img.src);
console.log('Alt : ', img.alt);

/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/
const list = document.querySelector('.list');
const newLI = document.createElement('li');
newLI.textContent = 'Nouveau LI';
list.appendChild(newLI);
