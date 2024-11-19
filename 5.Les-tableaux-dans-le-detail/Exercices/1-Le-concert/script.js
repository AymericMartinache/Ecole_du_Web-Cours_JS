/*  
    1. Le concert.    
    Vous allez devoir effectuer plusieurs opérations sur un tableau représentant une "foule" assistant à un concert, à vous d'utiliser les bonnes méthodes associées.
    Tentez de résoudre les étapes ci-dessous une à une.
*/

const concertRoom = [
    {
        name: 'Alexia',
        age: 24,
    },
    {
        name: 'Adam',
        age: 21,
    },
    {
        name: 'Victor',
        age: 23,
    },
    {
        name: 'Johanna',
        age: 22,
    },
    {
        name: 'Paul',
        age: 19,
    },
];

/* 
    A. L'abonnement de Paul a expiré, vous devez l'exclure du concert.
*/
const paul = concertRoom.findIndex((person) => person.name === 'Paul');
// La méthode splice() est utilisée pour supprimer Paul du tableau
// Le premier argument 'paul' est l'index où commencer (trouvé avec findIndex)
// Le deuxième argument '1' indique qu'on supprime 1 seul élément
concertRoom.splice(paul, 1);
console.log('Concert room après exclusion de Paul : ', concertRoom);

/*
    B. Afin de mieux analyser votre base de données, triez les objets du tableau par rapport à leur âge dans l'ordre croissant.
*/
const sortedByAge = concertRoom.sort((a, b) => a.age - b.age);
console.log('Concert room trié par âge : ', sortedByAge);

/*
    C. Les deux premieres personnes du tableau nouvellement trié, Adam et Johanna, veulent échanger leur place avec leur cousin Thomas et Clara.
    Remplacez les deux premiers éléments du tableau par :

    {
        name: "Thomas",
        age: 19
    },
    {
        name: "Clara",
        age: 21
    }
*/
sortedByAge.splice(
    0,
    2,
    {
        name: 'Thomas',
        age: 19,
    },
    {
        name: 'Clara',
        age: 21,
    }
);
console.log('Concert room après échange de place : ', sortedByAge);

/* 
    D. Le concert va commencer d'ici deux heures, envoyez dans la console un rappel à tous les participants sous cette forme : "Salut [name], le concert commencera d'ici deux heures !"
*/
concertRoom.forEach((person) => {
    console.log(
        `Salut ${person.name}, le concert commencera d'ici deux heures !`
    );
});
