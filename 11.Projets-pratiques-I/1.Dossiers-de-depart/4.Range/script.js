//* Tableau des émojis
const emojis = ['😡', '🙁', '😐', '🙂', '😁'];

//* Séléction des éléments
const emojiText = document.querySelector('.emoji-value');

const range = document.querySelector('.range-input');

//* Ajout des écouteurs d'evt
range.addEventListener('input', handleRange);

//* Fonction handleRange
function handleRange(evt) {
    emojiText.textContent = `
        ${emojis[evt.target.value - 1]}
    `;
}
