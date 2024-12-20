/*  
    1. On peut comparer plusieurs expressions dans une condition, cela peut mener à des comparaisons assez complexes, mais parfois indispensables.
*/

const user1 = {
    name: 'Victor',
    age: 35,
    admin: true,
    position: 'CEO',
};

const user2 = {
    name: 'Paul',
    age: 25,
    admin: false,
    position: 'Employee',
};

// Fonction qui verifier les permissions
function checkPermission(user) {
    if (
        (user.age > 30 && user.admin && user.position === 'CEO') ||
        user.position === 'Direction'
    ) {
        return 'Accès autorisé';
    } else {
        return 'Accès refusé';
    }
}
console.log(checkPermission(user2));

// Refactoring
function checkPermission2(user) {
    if (!user.admin || user.age < 30) return 'Accès refusé';
    if (user.position === 'CEO' || user.position === 'Direction')
        return 'Accès autorisé';
}
console.log(checkPermission2(user1));
