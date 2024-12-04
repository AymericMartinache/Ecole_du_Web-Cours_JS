//* 1. Rest operator
/* 
    Le paramètre du reste permet d'accepter un nombre indéfini d'arguments sous forme d'un tableau.
*/
function concatenation(...strings) {
    console.table(strings);

    let fullString = '';
    for (const string of strings) {
        fullString += string;
    }
    return fullString;
}
console.log(concatenation('Bonjour ', 'le ', 'monde '));

//* 2. Les paramètres par défaut.
/* 
    Ils permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.
*/

function welcoming(userName = 'Visiteur') {
    return `Bienvenue ${userName}`;
}
console.log(welcoming());
console.log(welcoming('Bob'));
console.log(welcoming('John'));
