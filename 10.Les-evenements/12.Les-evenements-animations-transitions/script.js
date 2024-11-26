/*
    Il existe des évènements utiles avec les animations et les transitions.

    Transitions : transitionend, transitioncancel, transitionend, transitionrun, transitionstart

    Animation : animationstart, animationend
*/

const box = document.querySelector('.box');

//* Transition
box.addEventListener('transitionstart', () => console.log('Transition start'));
box.addEventListener('transitionend', () => console.log('Transition end'));
box.addEventListener('transitionrun', () => console.log('Transition run'));

//* Animation
box.addEventListener('animationstart', () => console.log('Animation start'));
box.addEventListener('animationend', () => console.log('Animation end'));
