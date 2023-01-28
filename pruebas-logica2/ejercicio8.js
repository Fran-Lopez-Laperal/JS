/*Ejercicio 8: 
Dados un número entero, inviertelo y devuelve de nuevo el entero.
*/

let numeroParaInvertir = 123456789;

function invertirNumero(numero) {
    let invertir = numero.toString().split('').reverse().join('');
    return invertir;
}

console.log(invertirNumero(numeroParaInvertir));

