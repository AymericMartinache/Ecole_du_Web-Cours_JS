/* 
    Un objet Math est disponible en JavaScript.
    Math n'est pas un constructeur(qui sert à créer des objets), mais simplement un objet contenant pléthore de méthodes utiles pour réaliser des calculs mathématiques (sinus, puissance, random, min, max, etc ...).
    Le but n'est pas de toutes les connaître par coeur, mais simplement de savoir qu'elles existent et les utiliser en temps voulu.
    Découvrons les méthodes MATH les plus populaires et utiles.
*/

/* 
    1. Math.abs(number)
    Retourne la valeur absolue d'un nombre, c'est à la dire la valeur d'un nombre sans son signe.
    La valeur absolue de x est x.
    La valeur absolue de -x est x.
*/
console.log('Math.abs(-10) : ', Math.abs(-10)); // 10
console.log('Math.abs(10) : ', Math.abs(10)); // 10

/* 
    2. Math.ceil(number)
    Retourne l'entier suivant un nombre à virgule.
*/
console.log(
    "Math.ceil(10.98458754) (arrondi à l'entier supérieur) : ",
    Math.ceil(10.98458754)
); // 11

/* 
    3. Math.floor(number)
    Inverse de .ceil().
    Retourne l'entier inférieur d'un nombre à virgule.
*/
console.log(
    "Math.floor(10.98458754) (arrondi à l'entier inférieur) : ",
    Math.floor(10.98458754)
); // 10

/* 
    4. Math.round(number)
    Mélange de .ceil et .floor().
    Si le dernier chiffre d'un nombre à virgule est supérieur ou égal à 5, on arrondit à l'entier supérieur, sinon à l'entier inférieur. 
*/
console.log(
    "Math.round(10.98458754) (arrondi à l'entier supérieur ou inférieur) : ",
    Math.round(10.98458754),
    'Math.round(10.48458754) : ',
    Math.round(10.48458754)
);

/* 
    5. Math.cos(numberInRadians)
    Retourne le cosinus d'un angle.
*/
console.log('Le cosinus de 90° est : ', Math.cos(90));

/* 
    6. Math.max(x,y,...)
    Cette méthode retourne le nombre le plus grand parmi les arguments qu'on lui passe.
*/
console.log(
    'Nombre le plus grand parmi 10, 20, 30, 40, 50 : ',
    Math.max(10, 20, 30, 40, 50)
);

/* 
    7. Math.min(x,y,...)
    Cette méthode retourne le nombre le plus petit parmi les arguments qu'on lui passe.
*/
console.log(
    'Nombre le plus petit parmi 10, 20, 30, 40, 50 : ',
    Math.min(10, 20, 30, 40, 50)
);

/* 
    8. Math.pow(x,y)
    Retourne le premier argument exposant[second argument].
*/
console.log('10 exposant 2 : ', Math.pow(10, 2));

/* 
    9. Math.random()
    Retourne un nombre "au hasard" entre 0 inclus et 1 non inclus.
*/
console.log('Nombre au hasard entre 0 et 1 : ', Math.random());
console.log('Nombre au hasard entre 0 et 1 : ', Math.random());
console.log('Nombre au hasard entre 0 et 1 : ', Math.random());

/* 
    10. Math.trunc(number)
    Retour la partie entière d'un nombre à virgule.
*/
console.log('La partie entière de 9.446864 : ', Math.trunc(9.446864)); // 9

/* 
    Etc etc ...
    Encore une fois, le but n'est pas de toutes les retenir par coeur, mais de savoir que si vous avez besoin de faire un calcul mathématique en particulier, il existe surement une méthode pour vous aider à le réaliser.
*/
