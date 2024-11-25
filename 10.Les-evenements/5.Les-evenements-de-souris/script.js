/*
    Voici les évènements de pointage : click, dblclick, mouseup, mousedown.

    L'objet d'évènement fourni à la callback nous donnera donc des informations spécifiques au pointage.
*/
//* Au clic
document.addEventListener('click', handleClick);

//* Double clic
// document.addEventListener('dblclick', handleClick);

//* Clic appuyé
// document.addEventListener('mousedown', handleClick);

//* Clic relaché
// document.addEventListener('mouseup', handleClick);

function handleClick(event) {
    console.log(event);

    // Affichage des infos de l'event
    document.querySelector('.clic-info').textContent = `
        Event : ${event.type}
        x : ${event.pageX}
        y : ${event.pageY}
    `;
}

/*
    Il existe également d'autres évenements en rapport avec la souris, sans le clic.

    Notamment : mouseover, mousemove, mouseout, mouseenter, mouseleave, wheel
*/
const box = document.querySelector('.box');
//* Mouvement de la souris
// box.addEventListener('mousemove', () => console.log('Mouse Move'));

//* Quand on rentre dans l'élément
box.addEventListener('mouseenter', () => console.log('Mouse Enter'));

//* Quand on sort de l'élément
box.addEventListener('mouseleave', () => console.log('Mouse Leave'));

//* Quand on over l'élément
box.addEventListener('mouseover', () => console.log('Mouse Over'));

//* Action de la molette de la souris
document.addEventListener('wheel', () => console.log('Wheel !'));
