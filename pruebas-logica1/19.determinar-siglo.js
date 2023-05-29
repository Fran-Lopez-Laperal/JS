/* 
*** DETERMINAR SIGLO ***
Devolver el siglo en base al año que nos llega como parámetro.
*/

function whichCentury(num) {
    const century = Math.ceil(num / 100)

    return century
}

console.log(whichCentury(2000));



