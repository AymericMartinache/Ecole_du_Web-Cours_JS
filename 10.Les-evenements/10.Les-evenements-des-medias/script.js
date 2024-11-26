/* 
    On peut intégrer de la musique et des vidéos à l'aide des éléments <audio> et <video>.
    Ces élèments peuvent réagir à énormement d'évènements en rapport avec ces éléments.

    Découvrons ensemble : pause, play, loadeddata, playing, progress, etc...
*/
const video = document.querySelector('video');

//* Quand la vidéo est chargée
video.addEventListener('loadeddata', () => console.log('Data Loaded'));

//* Quand la vidéo est jouée
video.addEventListener('play', () => console.log('play'));

//* Quand la vidéo est mise en pause
video.addEventListener('pause', () => console.log('pause'));

//* Quand le temps de la vidéo change
video.addEventListener('timeupdate', () => console.log('Time update'));

//* Quand le volume est modifié
video.addEventListener('volumechange', () => console.log('Volume change'));

/* 
    Même combat pour l'élément <audio>.
*/
