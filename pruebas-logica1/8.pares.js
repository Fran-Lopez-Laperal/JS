/* 
*** PARES ***
Dado un array, devolver un array con todos los números pares que encuentre en el array.
*/

function isEven(arr) {
    let divisible = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            divisible.push(arr[i])
        }
    }

    return divisible;
}

console.log(isEven([4, 2, 1, -10000, -7]));