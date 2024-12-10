/* 
    Un système de classe a été rajouté en 2015 en JavaScript.

    Le but est d'utiliser une syntaxe plus simple et compréhensible que les fonctions constructeur, tout en faisant la même chose sous le capot.

    Le terme "sucre syntaxique" est beaucoup utilisé pour définir ce genre d'ajout. 
*/

//* Utilisation d'une classe
class Planet {
    constructor(name, radius, color) {
        this.name = name;
        this.radius = radius;
        this.color = color;
    }

    //* Ajout d'une méthode
    spin() {
        console.log('Spinning ! 🪐');
    }
}
// console.log(typeof Planet);

//* Création d'un objet Planet
const mars = new Planet('Mars', 3400, 'red');
console.log(mars);

//! Equivaux à

function Planet2(name, radius, color) {
    this.name = name;
    this.radius = radius;
    this.color = color;
}
Planet2.prototype.spin = function () {
    console.log('Spinning around');
};

const earth = new Planet2('Earth', 2600, 'blue', 1400);
console.log(earth, mars);
