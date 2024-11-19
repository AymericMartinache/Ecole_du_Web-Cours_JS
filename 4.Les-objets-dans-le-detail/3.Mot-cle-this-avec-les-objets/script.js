/* 
    1. Le mot-clé this avec les objets.

    Le mot-clé this représente une réfèrence à quelque chose.
    Néanmoins, cette référence est différente suivant les endroits où on l'utilise.
    
    Cela peut-être une référence à l'objet appelant quand on est dans une fonction classique, ou alors une référence au contexte englobant quand on est dans une fonction fléchée.
    
    Il existe d'autres cas de figure dont nous parlerons plus tard.
*/

const house = {
    room: 5,
    area: 200,
    priceWithoutTaxe: 850000,
    district: 7,

    // Fonction classique
    getFullePrice() {
        return this.priceWithoutTaxe * 1.2;
    },
    // Fonction fléchée
    convertSFtoSM: () => {
        return this.area * 0.92;
    },
};

console.log(house.getFullePrice());
console.log(house.convertSFtoSM());

function foo() {
    return this;
}
console.log(foo());
