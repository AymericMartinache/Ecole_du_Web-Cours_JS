/* 
    Les évènements de clavier peuvent nous permettre de connaître les touches pressées, ce qui peut être très utile dans de nombreux cas.
*/

const keyboardInfo = document.querySelector('.keyboard-info');

//* Appuie sur une touche du clavier
// document.addEventListener('keydown', handleKey);

//* Relache une touche duclavier
document.addEventListener('keyup', handleKey);

//* Fonction handleKey
function handleKey(event) {
    console.log(event.key);
    keyboardInfo.textContent = `${event.key}`;
}
