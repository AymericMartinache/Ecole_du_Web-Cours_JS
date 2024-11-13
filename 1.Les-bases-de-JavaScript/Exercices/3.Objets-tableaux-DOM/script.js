/* 
    1. Déclarer un objet "car" et inventez trois propriétés - valeurs de votre choix.
    Ex: name, price, doors, kilometers, maxSpeed, year, etc ...
*/

const car = {
    name: 'voiture',
    price: 15000,
    doors: 5,
    kilometers: 20000,
};
console.log('Objet car : ', car);

/* 
    2. Vous disposez d'un tableau de fruits ci-dessous.
    A - Loggez le deuxieme fruit dans la console.
    B - Loggez le dernier fruit dans la console.
    C - Retournez la longueur du tableau.
*/

const fruits = ['🍇', '🍓', '🍌'];
console.log('3ème fruit : ', fruits[1]);
console.log('Dernier fruit : ', fruits[fruits.length - 1]);
console.log('Longueur du tableau : ', fruits.length);

/* 
    3. Loggez l'objet global BOM.
*/
console.log('Le BOM : ', window);
