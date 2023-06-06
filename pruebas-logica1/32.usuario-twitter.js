/* 
*** ENCONTRAR USUARIO DE TWITTER ***
Queremos encontrar el usuario de twitter que se encuentra dentro de str y devolverlo. 
EJ: 'Seguinos en @CourseIt_' => @CourseIt_
*/

function findHandler(str) {
    const usuario = '@'
    const usuarioEncontrado = str.toLowerCase().includes(usuario)

    return  `${str} => ${usuarioEncontrado}`
   
}


// findHandler("Seguinos en @CourseIt_"); 
console.log(findHandler("Seguinos en @CourseIt_")); 