/* 
    Les méthodes setTimeout() et setInterval() sont très utilisées en JavaScript.
    
    Elles permettent d'exécuter une fonction callback de manière différée dans le temps, sans polluer le fil principal d'exécution JS.

    Ces opérations sont dîtes asynchrones.
*/

//* 1. window.setTimeout(callback, delay).
/*  
    Valeur de retour : un id permettant de stopper le timeout si on le souhaite avec clearTimeout().
    Exécute une callback ou bout d'un certain délai en millisecondes.
*/

const body = document.querySelector('body');

const timeoutID = setTimeout(() => {
    body.style.backgroundColor = 'grey';
    body.style.transition = '0.3s ease-in';
    console.log('Log après 2s');
}, 2000);

// Suppression du Timeout
// clearTimeout(timeoutID);

//* 2. window.setInterval(callback, delay)
/* 
    Valeur de retour : Un id permettant de mettre fin au setInterval.
    Fonctionnement : Exécute une fonction callback tous les x millisecondes définies par le second argument.
*/
const intervalID = setInterval(() => {
    console.log('Log toutes les 2s');
}, 2000);

// Suppression du setInterval
clearInterval(intervalID);
