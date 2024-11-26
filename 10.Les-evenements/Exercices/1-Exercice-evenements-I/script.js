/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/

//* Sélection des éléments
// Form
const form = document.querySelector('form');
// console.log(form);

// Inputs
const inputs = document.querySelectorAll('form input');
// console.log(inputs);

// Paragraphes
const firstnameParagraphe = document.querySelector('.firstname');
const lastnameParagraphe = document.querySelector('.lastname');
// console.log(firstnameParagraphe, lastnameParagraphe);

//* Ajout des écouteurs d'evt
// Form
form.addEventListener('submit', handleSubmit);

//* Fonction du submit
function handleSubmit(evt) {
    evt.preventDefault();
    // console.log('Formulaire envoyé !');

    //* Affichage dans les paragraphes
    firstnameParagraphe.textContent = `Votre prénom : ${inputs[0].value}`;
    lastnameParagraphe.textContent = `Votre nom : ${inputs[1].value.toUpperCase()}`;

    //* Reset du form
    form.reset();
}
