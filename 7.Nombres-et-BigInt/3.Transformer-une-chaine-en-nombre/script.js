/* 
    Comment transformer une chaîne en nombre ?
    Voilà un problème sur lequel on peut tomber en JS.
    Il existe, étrangement, beaucoup de façons de le résoudre.
*/

// .parseInt
console.log('parseInt("1075") : ', parseInt('1075')); // 1075

// .parseFloat
console.log('parseFloat("1075.558") : ', parseFloat('1075.558')); // 1075.558

// Le constructeur Number(), appelé en tant que fonction, peut convertir une chaîne en nombre.
console.log('Number("1075") : ', Number('1075'), typeof Number('1075')); // 1075

// Multiplier avec un nombre
console.log('"1075" * 2 : ', '1075' * 2); // 2150

// Math.floor(), même avec un argument entier.
console.log('Math.floor(10.98458754) : ', Math.floor(10.98458754)); // 10
console.log('Math.floor(10) : ', Math.floor(10)); // 10

// L'opérateur unaire +
// L'opérateur unaire + précède son opérande et essaye de le convertir en nombre si ce n'est pas déjà une valeur numérique.
console.log('+"1075" : ', +'1075'); // 1075
