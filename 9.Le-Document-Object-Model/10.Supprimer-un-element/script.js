//* 1. Element : remove()
/* 
    Supprime un élément du DOM.
*/
document.querySelector('h1').remove();

//* 2. Element : removeChild(childNodeToRemove)
/* 
    Supprime un élément enfant de l'élément appelant du DOM.
*/
document.body.removeChild(document.querySelector('h2'));

//* 3. Element : textContent = "";
/* 
    Supprime tout le contenu d'un élément en le remplaçant par une chaîne vide (rien).
*/
document.querySelector('h3').textContent = '';

//* 4. Element : replaceChildren(elementsToAdd)
/* 
    Remplace le contenu de l'élément appelant par le ou les arguments fournis.
    Accepte des chaînes ou des noeuds en argument.
*/
// const paragraph = document.createElement('p');
// paragraph.textContent = 'Lorem ipsum';
// document.body.replaceChildren(paragraph);

/* 
    5. Element : replaceChild(newChild,oldChild)

    Remplace un enfant représenté par le premier paramètre par le second.
*/
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Nouveau text';
document.body.replaceChildren(paragraph2);
