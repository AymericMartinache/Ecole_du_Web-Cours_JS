/* 
    1. Le chaînage optionnel

    L'opérateur ? permet de lire une propriété ou de retourner undefined si la propriété ou la chaîne de propriétés n'est pas valide.
    Sans cet opérateur, JavaScript retourne normalement une erreur.
*/
const store = {
    dairyProducts: {
        cheeses: ['Camembert', 'Roquefort', 'Cantal'],
        yogurt: ['Vanilla', 'Strawberry', 'Peach'],
    },
    pasta: {
        freshPasta: {
            flourPasta: ['Spaghetti', 'Ravioli', 'Fusilli'],
            flourAndPotato: ['Gnocchi'],
        },
    },
    getPrice: () => {
        return 20;
    },
};

console.log(store.dairyProducts?.cheeses[1]);

// Si la propriété n'existe pas, on a une erreur dans la console:
// Uncaught TypeError: Cannot read properties of undefined (reading 'chocolateCream')
// console.log(store.dairyProducts.icecream.chocolateCream[3]);

// Avec l'opérateur ? on a undefined
console.log(store.dairyProducts.icecream?.chocolateCream?.[3]);
