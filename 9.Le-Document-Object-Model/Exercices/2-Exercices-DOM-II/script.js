const data = [
    {
        content: 'Lait',
        category: 'Diary',
    },
    {
        content: 'Fromage',
        category: 'Diary',
    },
    {
        content: 'Savon',
        category: 'Wellness',
    },
    {
        content: 'Pommes',
        category: 'Fruits',
    },
    {
        content: 'Poulet',
        category: 'Meat',
    },
];

//* 1. Écrivez une fonction fillList(list, data) qui transforme les données data en <li>.
/*
    Un <li> par objet doit être créé.

    Chaque <li> contiendra un <p> avec le contenu de la propriété .content et un autre <p> avec le contenu de la propriété .category.

    Ajoutez ensuite chaque <li> dans la liste <ul>
*/
const shoppingList = document.querySelector('.list');
function fillList(list, data) {
    // Pour chaque données de data
    data.forEach((element) => {
        // Création d'un li
        const li = document.createElement('li');

        // Création du contenun du li
        const liContent = `
        <p></p>
        <p></p>
        `;

        // Ajout des paragraphes dans le li
        li.innerHTML = liContent;

        // Ajout des data dans la liste
        li.querySelector('p:nth-child(1)').textContent = element.content;
        li.querySelector('p:nth-child(2)').textContent = element.category;

        // Ajout des li dans ul
        list.appendChild(li);
    });
}

// Exécution de la fonction
fillList(shoppingList, data);

//* 2. Supprimez maintenant le premier et dernier élément de la liste.
// Suppression du premier élément
document.querySelector('.list li:first-child').remove();

// Suppression du dernier élément
document.querySelector('.list li:last-child').remove();
