/*
    Les "touch events" permettent de prendre en compte le "clic" d'un doigt sur un écran tactile.
*/

document.addEventListener('touchstart', () => console.log('Touch start'));
document.addEventListener('touchend', () => console.log('Touch end'));
document.addEventListener('touchmove', () => console.log('Touch move'));
