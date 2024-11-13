/* 
    1. Naming. 
    
    Sans décommenter les variables ci-dessous, devinez celles qui ont un nom non-réglementaire, c'est à dire celles qui vont provoquer une erreur lors de l'exécution de votre code par le navigateur.
    Rajoutez un commentaire à côté de chaque variable //correct ou //faux.

*/

// LET UsErNaMe = "John";   FAUX
// const _id = 99;  CORRECT (autorisé de commencer avec _ )
// let class = true; FAUX class est resérvé
// const isAdult = true; CORRECT
// const $card = {name: "card", content: "Lorem ipsum"}; CORRECT
// let 1452 = 1452; FAUX
// const sum41 = "music"; CORRECT

/* 
    2. Trouver un bon nom; 

    Essayez de trouver un bon nom à ces variables, puis déclarez-les avec ce nom et la valeur correspondante.

    A. Une let qui retourne un booléen en fonction de la présence d'un joueur en ligne.
    B. Une let qui retourne un booléen en fonction des droits d'un rôle "modérateur".
    C. Une const qui contient un tableau de nombres représentants des salaires.
    D. Une let contenant des informations sur la météo du jour.
    E. Une let qui contient la hauteur d'une page web.
    F. Une const qui contient un message d'alerte.

    Même chose pour des fonctions.

    G. Une fonction qui retourne les données d'un utilisateur
    H. Une fonction qui retourne un booléen si l'utilisateur est adulte.
    I. Une fonction qui crée un bouton
    J. Une fonction qui ajoute une animation 
*/

// A.
let isOnline = true;

// B.
let isModerator = false;

// C.
const salaries = [2450, 1850, 4712, 3254, 2000, 1578];

// D.
let currentWeather = {
    temperature: 27,
    humidity: 45,
    wind: 14,
};
console.log('Météo : ', currentWeather);

// E.
let scrollHeight = 4251;

// F.
const alertMessage = 'Vous ne pouvez pas faire ça';

// G.
function getUserInfo() {
    console.log('Infos utilisateur');
}
getUserInfo();

// H.
let age = 12;
function isAdult() {
    if (age > 18) {
        console.log(`L'utilisateur est adulte`);
    } else {
        console.log(`L'utilisateur n'est pas adulte`);
    }
}
isAdult();

// I.
function createButton() {
    console.log("Création d'un bouton");
}
createButton();

// J.
function addAnimation() {
    console.log(`Ajout de l'animation`);
}
addAnimation();
