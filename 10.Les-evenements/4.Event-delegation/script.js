/*
  L'event delegation permet d'avoir un code plus propre et de moins surcharger le navigateur d'écouteurs d'évènement.
*/

//* Exemple 1 - Non performant
// const cells = document.querySelectorAll('.cell');
// const textInfo = document.querySelector('.txt-info');

// cells.forEach((cell) => cell.addEventListener('click', handleCellClick));
// function handleCellClick(event) {
//     console.log(event.target);
//     textInfo.textContent = event.target.textContent;
// }

//* Exemple 2 - Performant
const grid = document.querySelector('.grid');
const textInfo = document.querySelector('.txt-info');

grid.addEventListener('click', handleGridClick);
function handleGridClick(event) {
    console.log(event.target);

    // On ajoute le texte seulement si l'élément cliqué a la classe "cell"
    if (event.target.classList.contains('cell')) {
        textInfo.textContent = event.target.textContent;
    }
}
