/* 
    1. Les tableaux

    Les tableaux permettent de stocker plusieurs valeurs sous la forme d'une liste.

    Les tableaux sont, sous le capot, des objets.

    Ils ont été créé car ils sont très pratiques pour manipuler des listes de valeurs, notamment grâce aux méthodes qui sont associées à ces derniers.

    Les indices ou index, c'est à dire les positions qui servent à retrouver les éléments d'un tableau, commencent à zéro !
    Cela porte à confusion quand on débute.

    const arr = ["a","b","c"]
    index         0   1   2
*/

const users = ['Paul', 'Ana', 'Juliette', 'Alexandre', 'Victor'];

// propriété length très pratique
console.log('Taille du tableau : ', users.length);

// Pour sélectionner le dernier élément d'un tableau
console.log('Dernier élément du tableau : ', users[users.length - 1]);

// push() -> ajout d'un élément
users.push('Aymeric');
console.table(users);

// pop() -> retire le dernier élément du tableau
users.pop();
console.table(users);

// indexOf() -> trouve l'index d'un élément
console.log('Index de Anna dans le tableau : ', users.indexOf('Anna'));

// Les tableaux sont des objets !

console.log('Type du tableau : ', typeof users); // object

// En effet, ils ont des propriétés (0,1,2,3,4,5...) et on y accède via la bracket notation.
