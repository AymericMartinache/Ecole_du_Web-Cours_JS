/* Découvrons la méthode fetch en JavaScript */

// Fonction qui va fetch les données
// function getCatImage(url) {
//     fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         createImg(data);
//     });
// }

//? On est pas obligé de mettre le fetch dans une fonction
fetch('https://api.thecatapi.com/v1/images/srch')
    .then((response) => {
        if (!response.ok) {
            throw Error(`${response.status}`);
        }
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        createImg(data);

        // Gestion des erreurs
    })
    .catch((error) => {
        // Sélection du message d'erreur
        document.querySelector('.error-msg').textContent = `Error ! : ${error}`;
        console.dir(error);
    });

// Appel de la fonction en ajoutant l'url de l'api
// getCatImage('https://api.thecatapi.com/v1/images/search');

// Création de l'image
function createImg(imgData) {
    const container = document.querySelector('.image-container');
    const img = document.createElement('img');
    img.src = imgData[0].url;
    container.appendChild(img);
}
