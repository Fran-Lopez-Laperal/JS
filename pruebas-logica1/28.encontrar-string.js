/*
*** ENCONTRAR  STRING***
Queremos saber cuántas veces se encuentra target dentro de string
*/

function findSubstring(target, string) {
    const substrings = string.split(target);
    return substrings.length;
  }
  
  console.log(findSubstring("ara", "ararara")); // Output: 3