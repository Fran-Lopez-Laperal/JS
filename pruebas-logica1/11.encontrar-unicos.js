/* 
*** ENCONTRAR ÚNICOS ***
Devuelve un array con todos los elementos que aparezcan solo una vez en el array que nos llega por parámetro.
*/

function unique(arr) {

    let unicos = [];

    const sortArr = arr.sort()
    

    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === sortArr[i + 1]) {
            false
        } else if (sortArr[i] = sortArr[i + 1]) {
            unicos.push(sortArr[i])
        }
    }
    return unicos
}

console.log(unique([4, 5, 4, 4, 6]));
