async function getCatImage(url) {
    let imgData;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw Error(`${response.status}`);
        }

        imgData = await response.json();
    } catch (error) {
        // Sélection du message d'erreur
        document.querySelector('.error-msg').textContent = `Error ! : ${error}`;
        console.dir(error);
    }
    if (imgData) {
        createImg(imgData);
    }
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
