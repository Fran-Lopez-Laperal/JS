/*
*** MAYOR REPETIDO ***
Dado un array, devuelve cuantas veces se repite el número más grande del array.

*/

function countGreater(arr) {

    let mayor = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
            console.log(`El numero mayor del array es ${arr[i]}`)
        };
    }
    return mayor


}

console.log(countGreater([1, 12, 26, 3, 4, 26, 5, 3, 32, 26, 1, 8]));
