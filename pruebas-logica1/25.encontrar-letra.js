/* 
*** ENCONTRAR LETRA EN EL ABECEDARIO ***
Encontrar la letra en el abecedario según el número, si no se encuentra devolver el string "invalid".
*/

function positionInAlphabet(num) {
  if (num >= 1 && num <= 26){
    const letter = String.fromCharCode(64 + num)
    return letter
  }
}

console.log(positionInAlphabet(8));