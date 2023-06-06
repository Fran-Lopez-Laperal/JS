/* 
*** ENCONTRAR LA POSICIÓN EN EL ARRAY ***
En base a un array ordenado 'arr', en que posicion se tendria que insertar "num"? Si "num" ya existe devolver su posicion actual.
*/

function insertPosition(arr, num) {
    arr.splice(0, 0, num);
    return arr
}


console.log(insertPosition([10, 30, 50, 60], 7)); 