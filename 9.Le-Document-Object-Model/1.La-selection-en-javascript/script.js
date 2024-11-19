/* 
    Les méthodes de sélection sont disponibles via l'objet document, mais aussi via tous les objets représentant des éléments. 
*/

/* 
    1 document|element.querySelector(selecteurCSS)

    Méthode "récente" qui sélectionne UN élément facilement, à l'aide de n'importe quel sélecteur, (h1, #main-title, .title, html body h1, etc ...).
    Retourne un objet représentant le premier élément trouvé.
*/
const mainTitle = document.querySelector('h1');
console.log('mainTitle : ', mainTitle);

// exemple si on veut modfiier le background du H1
mainTitle.style.backgroundColor = 'crimson';
mainTitle.style.color = 'white';

/* 
    2 document|element.querySelectorAll(selecteurCSS)

    Méthode "récente" permettant de sélectionner plusieurs noeuds du DOM. 
    Un noeud de DOM peut être du texte, un commentaire, ou encore un élément.
    Retourne une nodelist statique.
    Le fait qu'elle soit statique signifie qu'elle ne réagit pas à des changements ultérieurs sur les éléments qu'elle contient, elle reste toujours la même.
*/
const listItems = document.querySelectorAll('.list-item');
console.log('listItems : ', listItems);
listItems.forEach((item) => {
    item.style.backgroundColor = 'gray';
    item.style.color = 'white';
});

/* 
    3 .getElementsByClassName(strClassName)
    Retourne une HTMLCollection "live", qui réagit donc aux potentiels changements arrivants aux éléments qu'elle contient. 
*/
const listItems2 = document.getElementsByClassName('list-item');
console.log('listItems2 : ', listItems2);

/* 
    4 document.getElementById(strID)
    
    Retourne un objet élément en fonction de l'ID passé en argument. 
    Cette méthode est seulement accessible via l'objet document, pas sur les éléments. 
*/
const container = document.getElementById('container');
console.log('container : ', container);

/* 
    5 document.getElementsByTagName(strTag)
    
    N'accepte qu'un élément en argument, pas de sélecteur contenant plusieurs éléments.
    Retourne une HTMLCollection.
*/
const inputForm = document.getElementsByTagName('input');
console.log('inputForm : ', inputForm);
