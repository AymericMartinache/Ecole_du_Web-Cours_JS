/* 
    1. Fonction d'ordre supérieur.

    Les fonctions d'ordre supérieur sont des fonctions qui vont soit recevoir une fonction callback en argument soit retourner une fonction, ou les deux à la fois !

    Cela ouvre la voie à de nombreuses solutions et à une plus grande fléxibilité.
*/

// codons une fonction .filter() personnalisée
/* 
    Fonctionnement de customFilter :
    1. On crée un tableau 'salaries' contenant différents salaires
    2. La fonction customFilter prend deux paramètres :
       - array : le tableau à filtrer
       - callback : une fonction qui définit la condition de filtrage
    3. On crée un nouveau tableau vide 'filteredArray' qui contiendra les valeurs filtrées
    4. Pour chaque valeur du tableau d'entrée :
       - On exécute la fonction callback avec la valeur courante
       - Si callback retourne true, on ajoute la valeur au tableau filtré
    5. On retourne le tableau filtré
    6. Dans l'exemple, on filtre les salaires supérieurs à 3000
*/

const salaries = [1200, 5000, 4000, 2500, 3450, 1800];
function customFilter(array, callback) {
    const filteredArray = [];
    for (const value of array) {
        if (callback(value)) {
            filteredArray.push(value);
        }
    }
    return filteredArray;
}
console.log(customFilter(salaries, (salary) => salary > 3000));

const countries = [
    {
        name: 'Japan',
        gdp: 4941,
    },
    {
        name: 'Germany',
        gdp: 4260,
    },
    {
        name: 'South Korea',
        gdp: 1811,
    },
    {
        name: 'India',
        gdp: 3176,
    },
    {
        name: 'Canada',
        gdp: 1988,
    },
];
console.log(customFilter(countries, (country) => country.gdp > 2000));

// Exemple avec un composant d'ordre supérieur
// export default function Private() {
//     // On exécute useContext pour savoir si l'utilisateur est connecté.
//     const { currentUser } = useContext(UserContext);

//     // Si il n'est pas connecté, on retourne à la page d'accueil.
//     // <Navigate />, in fine, est une fonction.
//     if (!currentUser) {
//         return <Navigate to="/" />;
//     }

//     // Sinon on les emmène vers une page privé.
//     // <Outlet />, in fine, est une fonction.
//     return (
//         <div className="container">
//             <Outlet />
//         </div>
//     );
// }
