/* 
*** INVERTIR NUMEROS ***
Dado un número, devolverlo invertido.
*/

function invertNumber(num) {

    return num.toString().split("").reverse().join("")
   
}

console.log(invertNumber(123456789));


