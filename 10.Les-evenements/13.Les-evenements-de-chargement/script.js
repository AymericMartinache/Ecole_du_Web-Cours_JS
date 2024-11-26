/*
    Voici les évènements concernant le chargement d'une page : DOMContentLoaded, load.
*/

//* DOM Content Loaded
//! Se fait sur document
document.addEventListener('DOMContentLoaded', () =>
    console.log('Construction du DOM terminée')
);

//* Load
//! Se fait sur window
window.addEventListener('load', () => console.log('Tout est chargé !'));
