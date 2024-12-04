/* 
    Les getters et les setters permettent d'effectuer des actions supplémentaires lorsqu'on veut lire une propriété(getter) ou mettre en place une nouvelle valeur pour une propriété(setter).

    Sous le capot, c'est comme si une fonction était exécutée.
*/
const fruitsShop = {
    shopName: 'Fruits Paradise',
    fruits: ['🥭', '🍇', '🥥'],

    get fruitsLenght() {
        console.log('Getter');

        if (this.fruits.length <= 3) {
            console.log('Warning ! We are running out of fruits');
        }
        return this.fruits.length;
    },

    set setName(value) {
        if (!/fruits/i.test(value)) {
            console.log('Name must contain fruits');
            return;
        }
        this.shopName = value;
    },
};
fruitsShop.fruitsLenght;

fruitsShop.setName = 'Fruits heaven';
console.log(fruitsShop);
