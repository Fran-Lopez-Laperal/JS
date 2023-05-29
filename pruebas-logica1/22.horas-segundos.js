/* 
*** HORAS A SEGUNDOS ***
Devolver el valor de hours en segundos
*/

function hoursToSeconds(hours) {
    let seconds = Math.floor(hours * 3600) 

    return seconds
}

console.log(hoursToSeconds(0.1));

