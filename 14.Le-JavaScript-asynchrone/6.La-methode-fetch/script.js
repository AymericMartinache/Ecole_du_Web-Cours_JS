/* Découvrons la méthode fetch en JavaScript */

// Fonction qui va fetch les données
function getCatImage(url) {
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            createImg(data);
        });
}
// Appel de la fonction en ajoutant l'url de l'api
getCatImage('https://api.thecatapi.com/v1/images/search');

// Création de l'image
function createImg(imgData) {
    const container = document.querySelector('.image-container');
    const img = document.createElement('img');
    img.src = imgData[0].url;
    container.appendChild(img);
}
