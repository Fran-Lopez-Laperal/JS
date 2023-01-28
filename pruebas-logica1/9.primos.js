/* 
*** PRIMOS ***
Dado un numero, decir si este es primo(true) o no(false).
*/

function isPrime(num) {
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
}
console.log(isPrime(5));