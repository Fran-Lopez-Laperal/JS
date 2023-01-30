/* 
*** VOCALES ***
Devolver la cantidad de vocales que tiene el parámetro.
*/

function vowelCounter(str) {
   
    return str.match(/[aeiouAEIOUáéíóú]/gi).length
}

console.log(vowelCounter("otorinorAlingologo"));
