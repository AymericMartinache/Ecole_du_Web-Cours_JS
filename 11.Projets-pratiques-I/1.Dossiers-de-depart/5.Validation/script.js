//* Séléction des éléments
const animatedInput = document.querySelector('.animated-input');
const validation = document.querySelector('.validation');
const inputGroup = document.querySelector('.input-group');

//* Ajout des écouteurs d'evt
animatedInput.addEventListener('input', handleInput);

//* Fonction
function handleInput(evt) {
    if (evt.target.value !== '') {
        inputGroup.classList.add('filled-input');
    } else if (evt.target.value === '') {
        inputGroup.classList.remove('filled-input');
    }

    // Validation
    if (evt.target.value.includes('$')) {
        animatedInput.classList.add('error');
        validation.classList.add('active');
        validation.textContent = 'Les $ ne sont pas autorisés';
    } else {
        animatedInput.classList.remove('error');
        validation.classList.remove('active');
    }
}
