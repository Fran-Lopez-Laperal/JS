/* 
*** ELIMINAR 13 ***
Vamos a recibir un array, tenemos que eliminar todos los múltiplos de 13 y devolver el array.
*/

function removeThirteen(arr) {
    let newArr = []

 for(let i = 0; i < arr.length; i++){
   if(arr[i] % 13 != 0){
     newArr.push(arr[i])
   }
 }
 return newArr
    
}

console.log(removeThirteen([12, 53, 182, 435, 591, 637]));