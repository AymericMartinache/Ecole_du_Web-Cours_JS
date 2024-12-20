/* 
    1. Valeurs primitives

    Les valeurs primitives sont les : string, number, bigint, boolean, undefined, symbol, null.
    Elles représentent des valeurs "simples" dans la mémoire : "abc", 15, true, etc...

*/

let userName1 = 'Eric';
console.log(userName1);

let userName2 = userName1;
console.log(userName2);

userName1 = 'John';
console.log(userName1);
console.log(userName2);

/* 
    2. Les valeurs de référence.

    Les objets sont des valeurs de référence, c'est-à-dire qu'ils vont prendre une place spéciale dans la mémoire.
    Si on copie un objet dans une autre variable, nous créons une référence, nous ne créons pas une copie indépendante.
*/
const dog1 = {
    name: 'Rex',
    breed: 'Golden Retriever',
};
let dog2 = dog1;
console.log(dog2);

dog1.name = 'Bella';
console.log(dog1);
console.log(dog2);

/* 
    3. Pourquoi les chaînes ont des propriétés / méthodes ?

    Les valeurs primitives string, number, boolean et symbol sont transformées en objet lorsqu'on utilise l'opérateur "." qui sert à accèder à des propriétés.

    Cela permet d'avoir accès à des méthodes et des propriétés très pratiques.
*/
const str =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.';
console.log(str.toUpperCase());
