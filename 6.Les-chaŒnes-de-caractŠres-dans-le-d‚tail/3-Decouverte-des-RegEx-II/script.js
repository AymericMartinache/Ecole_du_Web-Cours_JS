/* 
    1. Les Quantificateurs et les alternances .

    Certains symboles nous permettent de gérer le nombre de répétitions d'une expression.
    On va également utiliser la méthode .match(), qui peut retourner un tableau contenant toutes les expressions rencontrées dans une chaîne, et pas seulement true ou false.
    Attention, au contraire de .test() cette fonction vient du prototype des Strings et pas des RegExp, donc "str".match(/regex/).
*/
const text = 'Je mange un osso buco à Milan.';
console.log(text.match(/[A-Z]/));
console.log(text.match(/[A-Z]/g));

/* 
    A. Quantificateur de quantité {n}
    Détermine combien de fois l'expression n doit avoir lieu.
*/
console.log('aaa'.match(/a{3}/g)); // ["aaa"]
console.log('aa'.match(/a{3}/g)); // null
console.log('baaa'.match(/ba{3}/g)); // ["baaa"]

/* 
    B. Intervalle {x,y}
    Détermine un intervalle d'occurrences possibles.
*/
console.log('azzaa,aaaaaaaaaaaaaa'.match(/a{2,4}/g)); // ["azzaa", "aaaa"]

/* 
    C. Intervalle infini {x,}
    Détermine un intervalle de x à l'infini.
*/
console.log('azzaa,aaaaaaaaaaaaaa'.match(/a{2,}/g)); // ["aaaaaaaaaaaaaa"]

/* 
    D. Le signe + 
    Entre 1 et plus l'infini, équivalent de {1,}.
*/
console.log('azzaa,aaaaaaaaaaaaaa'.match(/a+/g)); // ["aaaaaaaaaaaaaa"]

/* 
    E. Le signe * 
    Zéro ou plus, équivalent à {0,}.
    Attention, les quantifieurs font référence dans ce cas au caractère qui les précède, donc ici : 
    Chaque "ab" suivi d'un ou plusieur 5.
*/
console.log('ab5-ab555-ab5555'.match(/ab5*/g)); // ["ab5", "ab555", "ab5555"]

/* 
    F. Le signe ?  
    Signifie un ou zéro, équivalent à {0,1}.
    ici : http avec ou sans s.
*/
console.log('http'.match(/http?/g)); // ["http", "https"]

/* 
    G. Le signe | 
    Le ou logique des regex, permet de créer un modèle comprenant plusieurs correspondances possibles.
*/
console.log('rabbit'.match(/rabb(it|bit)/g)); // ["rabbit"]

/* 
    2. Les groupes (abc).
    Les groupes permettent de rassembler une série de caractères entre parenthèses.
    On peut ainsi combiner les groupes et les quantificateurs vus plus haut pour créer des expressions plus complexes et résoudre plus de problèmes.
*/
/* 
        A. Quelques exemples de groupes.
    */
console.log('15487471354473153447777'.match(/(47)+/g)); // ["4747", "4747", "4747"]

/* 
    Transformons le modèle "prénom.nom" en une regex.

    Résultat : /([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/ig
    Le premier groupe contient entre 1 et une infinité de caractères
    */
console.log('jean.dupont'.match(/([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/gi)); // ["jean", "dupont"]
console.log('julie.andré'.match(/([A-zÀ-ÿ]+).([A-zÀ-ÿ]+)/gi)); // ["julie", "andré"]
/* 

/* 
    B. Les groupes optionnels
    On peut utiliser le ? pour définir des groupes optionnels.
*/
console.log('bzbaa'.match(/b(zb)?(aa)/));

/*
    C. Les groupes nommés
    On peut nommer des groupes afin de s'y retrouver plus facilement, cette méthode est assez peu utilisée.
    Exemple : /(?<nom>x)/
*/
const regex = /(?<number>\d+)/;
console.log('55555'.match(regex)); // ["55555", number: "55555"]
/* 
    3. Les ancres ^ et $
    L'accent circonflexe permet de chercher une expression qui est au début d'une chaîne, et le dollar permet de chercher un modèle qui termine une chaîne.
*/

/* A. Un peu de pratique */
console.log('Je suis dans de beaux draps.'.match(/^Je/)); // [Je]
console.log(' Je suis dans de beaux draps.'.match(/^Je/)); // null (notez l'espace au début)
console.log('Je suis dans de beaux draps.'.match(/draps.$/));
