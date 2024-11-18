/* 
    Exercices : Les fonctions
*/

/* 
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.  
*/

// Fonction fléchée
const dividedBy10 = (num) => num / 10;
console.log(dividedBy10(100));

// Fonction classique
function dividedBy100(num) {
    return num / 100;
}
console.log(dividedBy100(5000));

/* 
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/
const weather = {
    city: 'London',
    temp: 15,
    getFahrenheit() {
        return this.temp * 1.8 + 32;
    },
};
console.log(weather.getFahrenheit());

/* 
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.
  Cette fonction retournera true ou false.
  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
*/

const travelers = [
    {
        name: 'Jean',
        nationality: 'FR',
    },
    {
        name: 'Victor',
        nationality: 'FR',
    },
    {
        name: 'Paul',
        nationality: 'FR',
    },
    {
        name: 'Jack',
        nationality: 'EN',
    },
    {
        name: 'Giulia',
        nationality: 'IT',
    },
];

function areFromNationality(arr, callback) {
    for (const traveler of arr) {
        if (!callback(traveler)) {
            return false;
        }
    }
    return true;
}
console.log(
    areFromNationality(travelers, (traveler) => traveler.nationality === 'FR')
);
console.log(
    areFromNationality(travelers, (traveler) => traveler.nationality === 'EN')
);

// On peut également utiliser la méthode JS "every" qui fait la même chose que notre fonction "areFromNationality"
function areFromNationality2(arr, nationality) {
    return arr.every((traveler) => traveler.nationality === nationality);
}
console.log(areFromNationality2(travelers, 'FR'));
console.log(areFromNationality2(travelers, 'EN'));
