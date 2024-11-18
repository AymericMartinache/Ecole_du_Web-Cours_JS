/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :

    A. Elle retourne toujours la même chose en fonction des mêmes paramètres.
    B. Elle n'utilise aucune valeur en dehors de sa portée et n'a pas d'effets secondaires en dehors de son bloc.

*/

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

//! Ceci n'est pas une fonction pure :
let VAT = 20;
function getFinalPrice(rawPrice) {
    return rawPrice * (1 + VAT / 100);
}
console.log(getFinalPrice(100));
