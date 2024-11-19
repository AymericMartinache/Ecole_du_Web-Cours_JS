/* 
    1. Nombre de jours entre deux dates.

    Créez une fonction daysBetweenDates(firstDate, secondDate) qui retourne le nombre de jours passés entre deux dates données.
    ex : daysBetweenDates(new Data(2021,0,13), new Date(2021,0,22)) // 9
*/

function daysBetweenDates(firstDate, secondDate) {
    const difference = secondDate.getTime() - firstDate.getTime();
    return Math.round(difference / (1000 * 60 * 60 * 24));
}
console.log(
    'Nombre de jours entre les dates : ',
    daysBetweenDates(new Date(2021, 0, 13), new Date(2021, 0, 22))
);
