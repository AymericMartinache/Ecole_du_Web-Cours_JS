/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site lorsqu'on clique dessus.
*/

//* Sélection du top bouton
const topButton = document.querySelector('.push-top-button');

//* Ajout de l'événement
topButton.addEventListener('click', handleScrollToTop);

//* Création de la fonction handleScrollToTop
function handleScrollToTop() {
    // mééthode 1
    // document.documentElement.scrollTop = 0;

    // méthode 2
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });

    // méthode 3
    document.documentElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes d'UX mais ce n'est pas ce qui compte ici. 👍
*/
//* Sélection du news bouton
const newsButton = document.querySelector('.scroll-to-newsletter');

//* Ajout de l'événement
newsButton.addEventListener('click', handleScrollToNewsLetter);

//* Création de la fonction handleScrollToNewsLetter
function handleScrollToNewsLetter() {
    //* Récupération des dimensions de la newsletter
    const newsletterDimensions = document
        .querySelector('.newsletter')
        .getBoundingClientRect();
    console.log(newsletterDimensions);

    //* Distance entre le top de la page et le top de newsletter
    const newsletterTopPosition = window.scrollY + newsletterDimensions.top;

    //* Scroll jusqu'à la newsletter
    window.scrollTo({
        top: newsletterTopPosition + newsletterDimensions.height / 2,
        behavior: 'smooth',
    });
}
