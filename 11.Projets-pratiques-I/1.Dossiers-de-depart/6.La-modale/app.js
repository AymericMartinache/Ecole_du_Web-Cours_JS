//* Séléction des éléments
// Modale
const modal = document.querySelector('.modal');

// Eléments avec la classe toggle-modal
const toggleTriggers = document.querySelectorAll('.toggle-modal');

//* Ajout des écouteurs d'evt
toggleTriggers.forEach((trigger) =>
    trigger.addEventListener('click', toggleModal)
);

//* Fonction
function toggleModal() {
    modal.classList.toggle('active');
}

//? Pour supprimer la propagation du toggle afin de ne pas fermer la modale en cliquant sur le texte
modalContent = document.querySelector('.modal-content');
modalContent.addEventListener('click', handleModalClick);

function handleModalClick(evt) {
    evt.stopPropagation();
}
