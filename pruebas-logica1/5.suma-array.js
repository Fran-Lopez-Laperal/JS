/*
*** SUMA DE ARRAY ***
Dado un array, devuelve la suma de todos los números del array.
*/

function arraySum(arr) {
    return arr.map(n => n + n)
}

console.log(arraySum([1, 2, 3, 4]));


