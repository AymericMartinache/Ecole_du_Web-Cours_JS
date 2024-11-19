/* 
    Les nombres, comme les chaînes de caractères, sont des types primitifs.
    Ils n'ont pas de méthode propre par défaut et ne fonctionnent pas par référence comme les objets.

    Néanmoins, certaines méthodes liées aux nombres existent, elles sont stockées dans le prototype Number qui est attaché aux objets Number créés via le constructeur Number. 

    Un objet number est créé quand on essaye d'appeler une méthode à partir d'un nombre.

    55.5554875.toFixed(2) // '55.56'
    Sous le capot:
    new Number(55.5554875).toFixed(2); 
*/
console.log(55);
console.log(new Number(10)); // ouvrez-le dans la console pour voir son prototype

/* 
    1. Number.prototype.toFixed(number)
    Retourne une chaîne correspondant au nombre dont les chiffres après la virgule ont été tronqués en fonction de l'argument fourni.
    Attention, le dernier chiffre après la virgule est arrondi à l'entier supérieur ou inférieur.
*/
console.log('(10.98458754).toFixed(4) : ', (10.98458754).toFixed(4)); // "10.9846"

/* 
    2. Number.prototype.toString(baseNumber)
    Transforme un nombre en chaîne de caractères.
    Le paramètre optionnel défini une base de conversion qui est par défaut une base décimale.

    Peut fonctionner avec des nombres à virgules
    784.45.toString() // "784.45"

    Il faut donc entourer les entiers pour le faire fonctionner, car vu que la syntaxe avec un nombre à virgule est possible, l'analyseur de la page pense qu'on a oublié la partie après la virgule dans ce cas-là.

    784.toString()    // Error : Unexpected token
    784.(attend une valeur ici)toString()

    Solution
    (784).toString()  // Ce comportement est similaire à toutes les méthodes liées aux nombres.

*/
console.log('(784.45).toString() : ', (784.45).toString()); // "784.45"
console.log('(784).toString() : ', (784).toString()); // "784"
console.log('(784).toString(16) : ', (784).toString(16)); // "310" en Hexadécimal, base 16.
console.log('(784).toString(2) : ', (784).toString(2)); // "1100010000" en binaire, base 2.

/* 
    3. Number.prototype.toPrecision(digitsNumber)
    Renvoie une chaîne représentant un nombre ayant une longueur définie par l'argument, en arrondissant le dernier chiffre.
*/
console.log('(1075.558).toPrecision(4) : ', (1075.558).toPrecision(4)); // "1075.6"
console.log('(10750).toPrecision(4) : ', (10750).toPrecision(4)); // '1.08e+4' (notation scientifique 1,08 x 10^4 = 10800)

/* 
    4. Number.parseInt(chaîne, baseNumber)
    Il existe également des méthodes générales directement attachées au constructeur Number.

    console.dir(Number) // Visualisation de cette fonction constructeur.
    
    Celle-ci convertit le premier argument représentant une chaîne en un nombre.
    On peut optionnellement convertir le résultat dans une autre base à l'aide du second argument.

    La méthode vient directement de l'objet Number, c'est un objet proposant des méthodes liées aux nombres.
*/
console.log('Number.parseInt("1075.558") : ', Number.parseInt('1075.558')); // 1075
console.log('Number.parseInt("0100111", 2) : ', Number.parseInt('0100111', 2)); // 39

/* 
    5. Number.parseFloat(chaîne, baseNumber)
    Similaire à parseInt mais pour les nombres à virgule.
*/
console.log('Number.parseFloat("1075.558") : ', Number.parseFloat('1075.558')); // 1075.558

/* 
    6. Number.isInteger(numberToCheck)
    Vérifie si l'argument fourni est un entier et retourne un booléen en conséquence.
*/
console.log('Number.isInteger(1075.558) : ', Number.isInteger(1075.558)); // false
console.log('Number.isInteger(1075) : ', Number.isInteger(1075)); // true
