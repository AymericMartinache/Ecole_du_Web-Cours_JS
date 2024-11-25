/* 
    Certains éléments ont déjà des écouteurs d'évènement par défaut et vont donc avoir un comportement spécial quand on les déclenche.

    Les formulaires vont tenter d'envoyer les données vers une page.

    Les liens nous font nous déplacer au click.

    Parfois, on a envie de prévenir ces comportements par défaut, on utilisera alors EventObject.preventDefault().

    Testons tout ça...
*/

//* Sélection des liens
const links = document.querySelectorAll('a');

//* Ajout des écouterus d'événements sur tous les liens
links.forEach((link) => link.addEventListener('click', handleClick));

//* Fonction handleClick
function handleClick(event) {
    // suppression du comportement par défaut (recharge de la page ou redirection)
    event.preventDefault();
    console.log('event au clic : ', event);
}

//* Sélection des formulaires
const form = document.querySelector('form');

//* Ajout d'un événement lors du submit du formulaire
form.addEventListener('submit', handleSubmit);

//* Fonction handleSubmit
function handleSubmit(event) {
    event.preventDefault();
    console.log('Formulaire envoyé');
}
