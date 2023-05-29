/* 
*** ¿ES STRING O NUMBER? ***
Determinar si el valor recibido (value) es number o string.
*/

function numOrStr(value) {
    if(typeof value === "number"){
        return 'El valor es un número'
    }else if(typeof value === "string"){
        return 'El valor es un string'
    }else{
        return 'El valor no es string ni número'
    }
}

console.log(numOrStr(Boolean));