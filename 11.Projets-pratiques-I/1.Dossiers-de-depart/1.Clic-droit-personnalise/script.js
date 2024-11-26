//* Sélection des éléments
// Menu
const customMenu = document.querySelector('.custom-menu');

// Boutons
const customMenuBtns = document.querySelectorAll('.custom-menu button');

//* Suppression du custom menu par défaut du navigateur
document.addEventListener('contextmenu', handleCustomMenu);

function handleCustomMenu(e) {
    e.preventDefault();

    customMenu.style.display = 'block';

    //* Positionnement direct avec top et left
    customMenu.style.position = 'fixed';
    customMenu.style.top = `${e.clientY}px`;
    customMenu.style.left = `${e.clientX}px`;
}

//* Suppression du menu au clic gauche
document.addEventListener('click', handleDocumentClick);
function handleDocumentClick() {
    customMenu.style.display = 'none';
}

//* Modification de la couleur
customMenuBtns.forEach((btn) =>
    btn.addEventListener('click', handleChangeColor)
);

function handleChangeColor(e) {
    e.stopPropagation();
    document.body.style.backgroundColor = `${e.target.dataset.color}`;
}
