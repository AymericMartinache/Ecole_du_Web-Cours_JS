//* Sélection des spoilers
const jsSpoilers = document.querySelectorAll('.js-spoiler');
// console.log(jsSpoilers);

//* Ecouteur d'evt
jsSpoilers.forEach((spoiler) =>
    spoiler.addEventListener('click', toggleSpoiler)
);

function toggleSpoiler(evt) {
    evt.target.classList.toggle('js-spoiler-revealed');
}
