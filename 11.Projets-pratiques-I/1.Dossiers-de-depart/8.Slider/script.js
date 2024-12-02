//* Séléction des éléments
const slideImages = document.querySelectorAll('.slide-img');
const controlButtons = document.querySelectorAll('.control-btn');

//* Pour chaques boutons, on ajoute un écouteru d'evt
controlButtons.forEach((button) =>
    button.addEventListener('click', handleSlider)
);

//* Fonction handleSlider
let index = 0;
function handleSlider(evt) {
    slideImages[index].classList.remove('active');

    index = index + Number(evt.target.getAttribute('data-action'));
    // console.log(index);

    if (index < 0) {
        index = slideImages.length - 1;
    } else if (index > slideImages.length - 1) {
        index = 0;
    }
    slideImages[index].classList.add('active');
}
