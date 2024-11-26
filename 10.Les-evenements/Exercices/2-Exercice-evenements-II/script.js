/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver parfaitement au milieu du cercle.
*/

//* Sélection des éléments
// Cercle
const circle = document.querySelector('.circle');

//* Ajout d'un écouteur d'événement 'mousemove' sur le document
document.addEventListener('mousemove', (event) => {
    // Coordonnées X et Y de la souris via event.clientX et event.clientY
    const x = event.pageX;
    const y = event.pageY;
    // console.log(x, y);

    //* Soustraire la moitié de la largeur/hauteur du cercle pour le centrer sur le curseur
    const halfWidth = circle.offsetWidth / 2;
    const halfHeight = circle.offsetHeight / 2;
    const centerX = x - halfWidth;
    const centerY = y - halfHeight;

    //* Appliquer ces coordonnées au cercle avec style.left et style.top
    circle.style.left = `${centerX}px`;
    circle.style.top = `${centerY}px`;
});
