//* Sélection des éléments
const copyClipboardButton = document.querySelector('.copy-clipboard-btn');
console.log(copyClipboardButton);

//* Ajout de l'evt
copyClipboardButton.addEventListener('click', handleCopyToClipboard);

//* Variable d'animation
let runningAnimation = false;

//* Fonction de copie
function handleCopyToClipboard(evt) {
    // Utilisation d'une API disponible dans le navigateur pour copier le contenu
    navigator.clipboard.writeText(
        // Cible de l'élément HTML précédent pour récupérer le texte
        evt.target.nextElementSibling.textContent
    );

    // Gestion de l'animation
    if (!runningAnimation) {
        evt.target.textContent = 'Copié ! ✅';

        // Ajout d'un Timeout pour revenir au message d'origine
        setTimeout(() => {
            evt.target.textContent = 'Copier 📄';
        }, 2000);
    }
}
