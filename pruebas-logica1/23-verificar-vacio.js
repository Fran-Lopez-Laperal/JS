/* 
*** VERIFICAR VACIO ***
Devolver true si el string está vacío, y false si no lo está.
*/

function isEmpty(str) {

    if(str.trim() === ""){
        return true
    }else{
        return false
    }

}

console.log(isEmpty(" "));