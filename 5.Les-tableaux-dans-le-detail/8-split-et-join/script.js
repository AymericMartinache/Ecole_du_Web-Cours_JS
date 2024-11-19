/* 
    1. .split(separator)
    Cette méthode permet de transformer une chaîne en tableau à partir d'un séparateur.
    Exemple : 
    "abc".split("") devient ["a","b","c"]
*/

let string = 'abc def ijk';
const split = string.split(' ');
console.log('Tableau splité : ', split);

/* 
    2. .join(separator)

    Celle-ci fait l'inverse de .split(), elle transforme un tableau en chaîne.
*/

let arr = ['a', 'b', 'c'];
const join = arr.join(' ');
console.log('Chaîne joinée : ', join);
