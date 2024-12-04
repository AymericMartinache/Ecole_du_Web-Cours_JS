/* 
  Les "template literals" ou "template strings" sont une syntaxe extrêmement pratique permettant d'intégrer des expressions dans une chaîne.
  
  On peut également les utiliser pour :
  - Intégrer des sauts de ligne
  - Concaténer des chaînes
  - Créer des templates (morceaux de code)

  On crée un gabarit en utilisant les backticks ``.
  Pour intégrer une expression, on utilise la syntaxe ${expression} entre les backticks.
*/

//* Ajout d'expression */
const a = 5;
const b = 10;

// Ancienne méthode
console.log("L'addition de a + b est égale : ", a + b);

// Templat literal
console.log(`L'addition de a + b est égale :  ${a + b}`);

//* Saut de ligne */
// Ancienne méthode
console.log('Voici du texte \n qui passe à la ligne');

// Templat literal
console.log(`Voici du texte
qui passe à la ligne`);

//* Utilisation de l'expression retournée par une fonction. */
function foo() {
    return 'abc';
}
console.log(`L'alphabet commence par : ${foo()}`);
