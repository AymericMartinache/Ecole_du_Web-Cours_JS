/*  
    Les élément imbriqués de notre page HTML deviennent des objets imbriqués du DOM après analyse d'un navigateur.

    <div>
        <p>Hello</p>
    </div>
    
    =>

    {
        tag: "div",
        content: "",
        children: [
            {
                tag: "p",
                content: "Hello"
            },
            ...
        ]
    }
    🔼 Ceci est une image pour vous aider à comprendre, ça ne représente pas les propriétés exactes utilisées.

    Découvrons les propriétés pratiques liées aux relations parents / enfants.
*/
const card = document.querySelector('.card');
console.log('Child Nodes : ', card.childNodes);
console.log('Children : ', card.children);

// Premier noeud
console.log('firstChild : ', card.firstChild);

// Premeier élément HTML
console.log('firstElementChild : ', card.firstElementChild);

// Dernier noeud
console.log('lastChild : ', card.lastChild);

// Dernier élément HTML
console.log('lastElementChild : ', card.lastElementChild);

const title = document.querySelector('h2');
console.log('Title : ', title);

// Noeud précédent
console.log('Title previousSibling : ', title.previousSibling);

// Noeud suivant
console.log('Title nextSibling : ', title.nextSibling);

// Elément précédent
console.log('Title previousElementSibling : ', title.previousElementSibling);

// Elément suivant
console.log('Title nextElementSibling : ', title.nextElementSibling);

// Noeud parent
console.log('Title parentNode : ', title.parentNode);

// Nom du noeud
console.log('Title nodeName : ', title.nodeName);

// Elément parent
console.log('Title parentElement : ', title.parentElement);
