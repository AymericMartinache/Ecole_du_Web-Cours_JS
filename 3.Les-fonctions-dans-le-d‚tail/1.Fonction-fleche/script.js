/* 
    1. Les fonctions fléchées.

    Apparues en 2015, elles sont plus concises et pratiques dans certains cas, mais moins lisibles dans d'autres.
    Elles ont également quelques différences de fonctionnement avec les fonctions classiques.
    Il ne faut pas les opposer, mais les utiliser judicieusement, en fonction de leurs caractéristiques.

*/

// Fonction classique
function getSquare(side) {
    return side * side;
}
console.log(getSquare(25));

// Fonction fléchée
const getSquare2 = (side) => side * side;
console.log(getSquare2(12));

/* 
    La fonction fléchée ci-dessus montre plusieurs caractéristiques :
    1. Elle utilise la syntaxe () => pour définir la fonction
    2. Avec un seul paramètre, les parenthèses sont optionnelles
    3. Avec une seule expression, les accolades et le "return" sont implicites
    4. Elle est stockée dans une constante
    
    C'est particulièrement utile pour les fonctions courtes et simples.
    La même fonction en syntaxe classique serait :
    const getSquare2 = function(side) {
        return side * side;
    }
*/
