//* Séléction des éléments
// Menu burger
const burgerButton = document.querySelector('.nav-toggler');

// Navigation
const navigation = document.querySelector('nav');

//* Ajout des écouteurs d'evt
burgerButton.addEventListener('click', toggleNav);

function toggleNav() {
    burgerButton.classList.toggle('active');
    navigation.classList.toggle('active');
}
