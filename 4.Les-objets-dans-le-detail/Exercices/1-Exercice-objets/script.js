/* 
    1. Création d'objet.

    Créez un objet restaurant contenant une méthode fléchée waiter qui exécute un console.log("Que desirez-vous ?") lorsqu'elle est appelée.

    Créez également les propriétés theme(thème du restaurant(Japonais, Italien, Libanais, ...)) et name avec les valeurs que vous souhaitez.
*/

const restaurant = {
    theme: 'Japonais',
    name: 'Sushi',
    waiter: () => console.log('Que desirez-vous ?'),
};
console.log(restaurant.waiter());

/* 
    2. Liste des props.

    Trouvez deux moyens de créer un tableau contenant toutes les props de l'objet ci-dessous.
  
*/

const dam = {
    name: 'Grand Coulee Dam',
    capacity: 6.809,
    height: 168,
    length: 1592,
    volume: 9155942,
};

const tab1 = Object.keys(dam);
console.table('Tableau 1', tab1);

// Création d'un tableau vide pour stocker les propriétés
const tab2 = [];
// Boucle for...in qui parcourt toutes les propriétés de l'objet dam
for (const prop in dam) {
    // Ajout de chaque propriété dans le tableau tab2
    tab2.push(prop);
}
// Affichage du tableau tab2 dans la console sous forme de tableau
console.table('Tableau 2', tab2);

/* 
      3. Copie
  
      Copiez, à l'aide du spread operator, les valeurs du tableau names dans un nouveau tableau namesCopy.
      Changez la valeur du dernier prénom du tableau names en "Tom".
  
      Sans utiliser la console, est-ce qu'il y a un problème de réfèrence, ou pas ?
  */

const names = ['Jack', 'Paul', 'Lucas'];
const namesCopy = [...names];
names[2] = 'Tom';
console.table(names);
console.table(namesCopy);
