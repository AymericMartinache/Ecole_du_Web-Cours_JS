/* 
    Les modules ES6 permettent de découper son code en plusieurs morceaux.

    Avant, on devait mettre des <script> les uns au-dessus des autres, mais c'était difficilement maintenable.
*/

// import { userName, age } from './module1.js';

//? on peut renommer les imports avec "as"
import { userName as name, age } from './module1.js';
console.log(name, age);

import { add, multiply } from './module2.js';
console.log(add(2, 3));
console.log(multiply(2, 3));
