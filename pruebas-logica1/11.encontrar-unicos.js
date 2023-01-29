/* 
*** ENCONTRAR ÚNICOS ***
Devuelve un array con todos los elementos que aparezcan solo una vez en el array que nos llega por parámetro.
*/

function unique(arr) {




    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] = arr[i]) {
           return  arr[i]
        }

        // console.log(sortArr[i])
        // if(arr[i] === arr[i + 1]){
        //      false
        // }else if(arr[i] = arr[i + 1]){
        //     unicos.push(arr[i])
        // }
    }



}

console.log(unique([4, 5, 4, 4, 6]));
