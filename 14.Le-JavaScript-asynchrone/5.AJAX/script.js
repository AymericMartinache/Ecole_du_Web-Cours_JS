/*
    AJAX veut dire : Asynchronous JavaScript And XML.
    
    C'est une fonctionnalité permettant d'envoyer des requêtes vers un serveur et de recevoir des données alors que la page a déjà chargé. 

    On va donc pouvoir envoyer et recevoir des données sans actualiser la page.
*/

/*
    Voici l'ancienne façon de faire, on utilise aujourd'hui la méthode fetch() qui est plus simple à utiliser mais qui utilise XMLHttpRequest sous le capot.
*/

// Utilisation de l'api The cat API (https://api.thecatapi.com/v1/images/search)

function getCatImage(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.addEventListener('load', handleLoad);
    function handleLoad() {
        callback(xhr.response);
    }
    xhr.send();
}

getCatImage('https://api.thecatapi.com/v1/images/search', (data) => {
    console.log(data);

    // Ajout de l'image sur la page
    const container = document.querySelector('.image-container');
    const img = document.createElement('img');
    img.src = data[0].url;
    container.appendChild(img);
});
