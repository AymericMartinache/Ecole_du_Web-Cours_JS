/* 
    1. La boucle while.

    La boucle while exécute une instruction tant qu'une expression est truthy.
    
    Attention, si vous avez l'auto-save d'activé, cela peut provoquer une boucle infinie qui fait bugger votre navigateur.
*/
let engineTemperatur = 20;

while (engineTemperatur < 100) {
    engineTemperatur++;
}

console.log(engineTemperatur);

/* 
    2. La boucle do...while

    Boucle peu utilisée qui ressemble au while ou à la for loop, à l'exception près qu'elle exécute une instruction au moins une fois.
*/
let num = 1;
do {
    num++;
} while (num < 10);
console.log(num);
