/* 
    1. Utiliser un fragment avec Document : createDocumentFragment()

    Les fragments permettent de rajouter du contenu sans créer un container pour rien.
    Les éléments contenus dans le fragment se rajoutent tout simplement dans l'élément souhaité. 
*/

const title1 = 'A random title H2';
const title2 = 'Another one H3';

// Création du fragment
const fragment = document.createDocumentFragment();

// Création des éléments h2 et h3
const h2 = document.createElement('h2');
h2.textContent = title1;
fragment.appendChild(h2);

const h3 = document.createElement('h3');
h3.textContent = title1;
fragment.appendChild(h3);

// Ajout du fragment dans le body
document.body.appendChild(fragment);
