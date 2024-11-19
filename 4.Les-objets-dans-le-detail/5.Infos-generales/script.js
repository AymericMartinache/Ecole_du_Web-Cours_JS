/*
    1. Le mot clé delete.

    On peut supprimer une propriété d'un objet à l'aide du mot clé delete.
*/

const city = {
    name: 'Bratislava',
    population: 424000,
};

console.log(city);
delete city.name;
console.log(city);

/* Attention, utiliser delete avec la propriété d'un tableau va remplacer l'élément supprimé par un élément empty */
const array = [1, 2, 3, 4, 5];
delete array[0];
console.log(array);

/* 
    2. Bracket et dot notation.

    On peut sélectionner des propriétés en utilisant deux notations.
   
    A. Le point : obj.prop
    La dot notation, en utilisant directement le nom d'une propriété.
    La dot notation n'est pas disponible avec une chaîne de caractère ou un nombre, dans ce cas il faut utiliser la bracket notation.

    B. Les crochets [] : obj["prop"]
    C'est la bracket notation.
    Si vous utilisez un autre type qu'une chaîne entre les crochets, il sera converti en chaîne. obj[1] donnera obj["1"]

*/

const dog = {
    name: 'Riki',
    legs: 4,
    10: 9999,
};

console.log(dog.name);
console.log(dog['10']);

/* 
    3. Form raccourcie des méthodes.

    On peut utiliser des fonctions classiques et les fonctions fléchées dans les objets, voyons ensemble les différentes syntaxes.
*/
const robot = {
    // Fonction classique
    aim: function () {
        console.log('Aiming');
    },

    // Fonction classique raccourcie
    shot() {
        console.log('Shooting');
    },

    // Fonction fléchée
    move: () => {
        console.log('Moving');
    },
};

/* 
    4. Les tableaux sont des objets.

    Les tableaux sont des objets spéciaux permettant de manipuler plusieurs valeurs facilement et contenant toute une floppée de méthodes très pratiques.

    Chaque élément est accessible par son index, nous sommes donc en présence d'une propriété - valeur. 

    Cela ressemble beaucoup à un objet n'est-ce pas ?
    [
      0: "🍓",
      1: "🍌",
      2: "🍇"
    ]

    Ils ont également une propriété length.
    On accède aux propriétés d'un tableau via la bracket notation, avec des nombres (les index).

*/

const fruits = ['🍓', '🍌', '🍇'];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits[0], fruits['1']);
fruits.test = 'nouveau ';
console.log(fruits);
console.log(fruits.test);

/* 
    5. Les fonctions sont des objets.

    En JavaScript, on dit que les fonctions sont des first-class objets, car elles peuvent être appelées, passées à d'autres fonctions(paramètres-arguments), et quelles contiennent aussi des propriétés.
    Les fonctions sont des objets créés à partir du constructeur Function.

*/
function foo() {
    console.log('hello');
}
// Ajout d'une propriété à la fonction foo
foo.customProp = 'customProp';
console.dir(foo);
