/* 
    1.Les méthodes.

    Une méthode est une propriété d'un objet contenant une fonction.
    On appelle une méthode en utilisant le nom de la propriété qui lui est associée.

*/

const athlete = {
    jump: () => {
        console.log('jump');
        console.log(this); // this fait référence au contexte englobant
    },

    swim: function () {
        console.log('swim');
        console.log(this); // this fait référence au contexte appel
    },
    run() {
        console.log('run');
    },
};

athlete.jump();
athlete.swim();
athlete.run();
