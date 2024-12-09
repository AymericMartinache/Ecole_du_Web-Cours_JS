//* Séléction des éléments
const text = document.querySelector('h2');

//* Fonction de décrémentation
function countdownValue() {
    //* Récupération de la date
    const now = new Date();
    // console.log(now);

    //* Date de fin
    const countdownDate = new Date('january 1, 2025');

    //* Calcul de la différence
    const distance = countdownDate - now;
    // console.log(distance);

    //* formatage des millisecondes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // console.log(days, hours, minutes, seconds);

    //* Ajout du texte dans le H2
    text.textContent = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes avant 2025`;
}

//* Ajout d'un setInterval toutes les 1s pour actualiser
setInterval(countdownValue, 1000);
