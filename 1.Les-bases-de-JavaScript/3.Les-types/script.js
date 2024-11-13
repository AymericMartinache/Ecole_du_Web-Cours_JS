/* 
    En JavaScript, il existe plusieurs types permettant de manipuler des valeurs avec des comportements et des caractéristiques différents.
*/

/* 
    NUMBER : Le type nombre représente un nombre entier ou à virgule entre 9007199254740991 et 9007199254740992.
    Au-delà de ces nombres, les calculs ne sont plus fiables et nous pouvons utiliser un nouveau type bigInt.
*/
let age = 99;
console.log(age, '->', typeof age);

/*  
    STRING : Le type représentant des chaînes de caractères.
    On peut utiliser la longueur de la chaîne grâce à length.
    On peut accéder à une lettre avec la bracket notation.
*/
const userName = 'Paul';
console.log(userName);
console.log(userName, '->', typeof userName);
console.log(userName.length, 'Nombre de caractères');
// Lettre à l'index 0
console.log(userName[0]);

/* 
    BOOLEAN : Un type représentant une valeur vraie(true) ou fausse(false).
*/
let isAdult = false;
console.log(isAdult);
console.log('boolean ->', typeof isAdult);

/* 
    UNDEFINED : Le type représentant une valeur non-définie, typiquement quand une variable n'a pas encore reçue de valeurs.
*/
let price;
console.log('Valeur non définie pour la variable -> ', price);

/* 
    NULL : Ce type réprente une valeur qui n'existe pas, typiquement quand on essaye d'utliser une variable non créée. 
*/
console.log("Une variable qui n'existe pas ->", null);

/* 
    BIGINT : Ce type représente des nombres très grands.
    Il a été rajouté récemment pour palier à des problèmes assez rares.
*/
console.log(
    'BigInt 99999999999999999999999999999999 ->',
    typeof 99999999999999999999999999999999n
);

/* 
    OBJECT : Un objet est un container de propriétés représentant des valeurs.
    On appelle une propriété "méthode" lorsque sa valeur est une fonction.
    C'est un type très important, qu'il faut maîtriser et qui représente une grande partie du fonctionnement du langage JavaScript.
*/
const normay = {
    name: 'Norway',
    capital: 'Oslo',
    population: 5400000,
    GDP: 482,
};
console.log("C'est un objet -> ", typeof normay, normay);
console.log('Nom: ', normay.name);
console.log('Capitale: ', normay.capital);
console.log('GDP: ', normay.GDP);

/* 
    FUNCTION : Les fonctions sont ... des objets ! Même si typeof nous donne le "type" function, ce sont bien des objets éxécutables. 
    Nous verrons le fonctionnement des fonctions en détail dans ce cours, regardons simplement un exemple classique. 
*/
function getSquare(a) {
    return a * a;
}
console.log('Le résultat est :', getSquare(4));
console.log('Le type est :', typeof getSquare);

/* 
    ARRAY : Les tableaux sont ... également des objets ! 
    Mais alors, pourquoi les avoir créés ? Afin d'exploiter certaines propriétés et méthodes très pratiques, propres aux tableaux, comme la propriété length, ou les méthodes .map(), .filter(), etc ...
    Nous reviendrons également très en détail sur les tableaux.
*/

const salaries = [1580, 2000, 1610, 3400, 2745];
console.log(salaries[0]);
console.log('Le type est :', typeof salaries);

// Exemple de méthode pour un tableau:
salaries.forEach((salary) => {
    console.log('La salaire est de : ', salary);
});

// On accède aux élément d'un tableau grâce à l'indice de ce dernier qui commence à 0
// C'est à dire que le premier élément est à l'indice 0.
