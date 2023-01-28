/* 
*** INVERTIR STRING ***
Dado un texto, devolverlo invertido.
*/

function reverseString(str) {
  
    let reverseStr = str.split("").reverse();
    return reverseStr.join("")
}

console.log(reverseString("hola mundo"));