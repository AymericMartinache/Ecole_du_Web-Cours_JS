/* 
    1. .split(separator)
    Cette méthode permet de transformer une chaîne en tableau à partir d'un séparateur.
    Exemple : 
    "abc".split("") devient ["a","b","c"]
    
    Explication ligne par ligne :
*/

// On déclare une variable str qui contient la chaîne 'abc'
let str = 'abc';
// On utilise split('') pour séparer chaque caractère et créer un tableau
const split = str.split('');
// On affiche le tableau créé qui sera ['a','b','c']
console.log('Tableau créé : ', split);

// On déclare une variable str2 qui contient la chaîne 'a-b-c'
let str2 = 'a-b-c';
// On utilise split('-') pour séparer la chaîne aux tirets et créer un tableau
const split2 = str2.split('-');
// On affiche le tableau créé qui sera ['a','b','c']
console.log('Tableau créé : ', split2);

/* 
    2. .join(separator)
    Celle-ci fait l'inverse de .split(), elle transforme un tableau en chaîne.
    
    Explication ligne par ligne :
*/

// On déclare un tableau arr contenant trois éléments
let arr = ['a', 'b', 'c'];
// On utilise join('-') pour joindre les éléments avec des tirets
const join = arr.join('-');
// On affiche la chaîne créée qui sera 'a-b-c'
console.log('Chaîne concaténée : ', join);
// On utilise join('+') pour joindre les éléments avec des plus
const join2 = arr.join('+');
// On affiche la chaîne créée qui sera 'a+b+c'
console.log('Chaîne concaténée : ', join2);
