//* Sélection des éléments
const grid = document.querySelector('.grid');

// console.log(item, text, link);

//* Réupération des articles via l'API (https://jsonplaceholder.typicode.com/posts)
async function getArticles(url) {
    let articles;
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
            throw Error(`Erreur : ${response.status}`);
        }

        articles = await response.json();
        console.log(articles);
    } catch (error) {
        const p = document.createElement('p');
        p.textContent = error.message;
        grid.appendChild(p);
        console.dir(error);
    }
    if (articles) {
        createArticle(articles);
    }
}
getArticles();

//* Création des articles
function createArticle(articles) {
    articles.forEach((article) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <h2></h2>
            <a href="#">Lire l'article</a>
        `;
        item.querySelector('h2').textContent = article.title;
        grid.appendChild(item);
    });
}
