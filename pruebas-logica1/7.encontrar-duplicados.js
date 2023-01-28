/* 
*** ENCONTRAR ÚNICOS ***
Devuelve un array con todos los elementos que aparezcan al menos dos veces en el array que nos llega por parámetro.
*/

function findDuplicates(arr) {

    let duplicados = [];

    let orderArr = arr.sort()

    for (let i = 0; i < orderArr.length ; i++){
     
       if (orderArr[i + 1] === orderArr[i]){
       
        duplicados.push(orderArr[i])
       }
    }
    return duplicados
}

console.log(findDuplicates(["hola", "hola", 1, 1, 5, 6, 1, 1, 6, 8, 12]));


