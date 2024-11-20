/* 
    Il est très courant de vouloir créer des éléments en JavaScript.
    Découvrons ensemble la façon de faire classique.
*/

//* 1. Document : createElement(tagName)
/* 
    Créer un objet Element en fonction de l'argument de type string fourni.
*/
//* On sélectionne le bouton qui va ajouter une liste
const addLiBtn = document.querySelector('.create-btn');

//* On sélectionne la liste
const list = document.querySelector('.list');

//* 2. Node : appendChild(child)
/* 
    Rajoute un noeud enfant à la fin de la liste d'enfants de l'élément appelant.
*/

//* 3. EventTarget : addEventListener(event, callback)
/* 
    Rajoute un écouteur d'évenement à un élément, nous reviendrons très en détail sur cette méthode plus tard.
*/
addLiBtn.addEventListener('click', handleClick);

//* Fonction handleClick
function handleClick() {
    // Je créé l'élément
    const li = document.createElement('li');
    li.textContent = ' Hey world !';
    list.appendChild(li);
}
