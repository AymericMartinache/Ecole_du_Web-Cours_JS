/* 
    Il existe beaucoup de méthodes utiles pour trouver un élément, son index ou sa présence dans un tableau.
*/

/* 
    1. Array.prototype.indexOf(value)
    Retourne l'index du premier élement qui correspond à l'argument.
*/
const cats = ['Poppy', 'Misty', 'Luna', 'Lily', 'Titi'];
const index = cats.indexOf('Lily');
console.log('Index de Lily : ', index);

/* 
    2. Array.prototype.findIndex(callback(element, index, array))
    Définition: Retourne l'index de l'élément qui, le premier, fait en sorte que la callback retourne true.
    Cette fonction ressemble à .indexOf(), mais la possibilité d'utiliser une callback démultiplie les possibilités de recherche.
    Valeur de retour: index d'un élément.
*/
const germanCities = [
    {
        name: 'Berlin',
        population: 3.645,
    },
    {
        name: 'Hamburg',
        population: 1.841,
    },
    {
        name: 'Munich',
        population: 1.472,
    },
];
const index2 = germanCities.findIndex((city) => city.name === 'Munich');
console.log('Index de Munich : ', index2);

/* 
    3. Array.prototype.includes(value)
    Retourne true ou false en fonction de la présence de l'argument fourni.
*/
const includes = cats.includes('Lily');
console.log('Lily est dans le tableau : ', includes);

/* 
    4. Array.prototype.some(callback(element, index, array))
    Définition: Teste tous les éléments d'un tableau avec une fonction callback.
    Si le retour de cette fonction est présent dans le tableau, retourne true, sinon false.
    La différence avec .includes est qu'on utilise une callback en paramètre, permettant ainsi de tester toutes sortes de comparaisons.
    Valeur de retour: true ou false.
*/

const employees = [
    {
        name: 'Christoper',
        age: 35,
        job: 'WebDesigner',
    },
    {
        name: 'Ana',
        age: 25,
        job: 'Front End Developer',
    },
    {
        name: 'Peter',
        age: 47,
        job: 'Cybersecurity Engineer',
    },
];
const some = employees.some((employee) => employee.age > 40);
console.log('Au moins un employé a plus de 40 ans : ', some);

/* 
    5. Array.prototype.every(callback(element, index, array))
    Définition: Retourne true seulement si la callback exécutée sur chaque élément retourne tout le temps true.
    
*/
const weights = [60, 45, 99, 75, 85, 77, 105];
const every = weights.every((weight) => weight > 40);
console.log('Tous les poids sont supérieurs à 40 : ', every);

/*
    6. Array.prototype.find(callback(element,index,array))
    Définition: Retourne le premier élément qui satisfait le retour de la callback.
    Valeur de retour : un élément du tableau.
*/
const users = [
    {
        id: 1,
        name: 'Paul',
    },
    {
        id: 2,
        name: 'Michel',
    },
    {
        id: 3,
        name: 'Laura',
    },
    {
        id: 4,
        name: 'Antoine',
    },
];
const find = users.find((user) => user.id === 3);
console.log("L'utilisateur avec l'id 3 est : ", find);
