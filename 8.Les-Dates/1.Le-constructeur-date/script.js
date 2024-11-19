/* 
    En JavaScript, on peut construire un objet date à l'aide du constructeur Date().
*/

/* 
    1. Date.prototype.getDate/Day/FullYear/Hours/Millisecondes/Minutes/Month/Seconds()
    Retourne le jour, l'heure, l'année, les minutes, etc ... en fonction de la méthode utilisée.
*/
const date = new Date();
console.log(
    typeof date,
    date.getDate(),
    date.getUTCMonth(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
);
// Exemple pour récupérer une date complète :
console.log('date.toLocaleDateString() : ', date.toLocaleDateString());

/* 
    2. Date.now() 
    Retourne le nombre de millisecondes écoulées depuis le 1er Janvier 1970.
    C'est un date arbitraire qui a été choisie pour faciliter les calculs.
*/
console.log(
    'Date.now() (nombre de millisecondes écoulées depuis le 1er Janvier 1970) : ',
    Date.now()
);

/* 
    3. Modifier une date avec Date.prototype.setHours/Minutes/Secondes() etc ... 
*/
date.setDate(15);
date.setMonth(0);
date.setHours(10);
date.setMinutes(55);
date.setFullYear(2004);
console.log('Modification de la date : ', date);

/*
    4. On peut directement faire des calculs avec les objets Date.
    La valeur en millisecondes de ces dates sera utilisée.
    On peut également accèder à cette valeur avec Date.prototype.valueOf().
*/
console.log('date.valueOf() : ', date.valueOf());
