/*
    1. Que va retourner honk() dans la console ?
*/

function Car(model, price) {
    this.model = model;
    this.price = price;
}
Car.prototype.honk = function () {
    console.log('Honk Honk');
};

const fiat = new Car('500', 20000);

Car.prototype = {};

fiat.honk(); // Retourne bien la méthode honk -> log "Honk honk" car l'instance est faite AVANT le définition du nouveau prototype

//* Les nouvelles instances  n'auront pas accès à cette méthode.
const fiat2 = new Car('Doblo', 12000);
// console.log(fiat2);

/*
    2. Voici deux fonctions constructeur,   
*/

function Instrument() {}
Instrument.prototype.play = function () {
    console.log('Play music');
};

function Piano(type, price) {
    this.type = type;
    this.price = price;
}

//* Faites en sorte que Piano hérite du prototype d'Instrument.
Object.setPrototypeOf(Piano.prototype, Instrument.prototype);

//* Puis créez une constante 'yamaha' contenant un nouvel objet piano.
const yamaha = new Piano('Long', 15000);

//* Enfin, exécutez play() à partir de yamaha afin de vérifier que l'héritage fonctionne correctement.
yamaha.play();
