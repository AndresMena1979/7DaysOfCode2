let ingresaNombre = "" ;        /* Declaracion de variables como cadena vacia*/
let ingresaEdad = "" ;         
let ingresaLenguaje = "" ;     

let gustarEstudiar=0;       /*declaracion de varaible para preguntar si le gusta el lenguaje de programacion*/

while (ingresaNombre === "") {                      /* while mientras el usuario no ingrese ningun valor */

    ingresaNombre = prompt("¿Cuál es tu nombre?");

    if (ingresaNombre === "") {
        alert("Por favor, ingresa tu nombre.");
    }
}


while (ingresaEdad === "" || parseInt(ingresaEdad) <= 0) {   /*  while mientras el usuario no agregue valor o coloque un valor menor o igual a cero*/

    ingresaEdad = prompt("¿Cuántos años tienes?");

    if (ingresaEdad === "" || parseInt(ingresaEdad) <= 0) {
        alert("Por favor ingresa tu edad");
    }
}


while (ingresaLenguaje === "") {                              /*while mientras el usuario no ingrese un dato valido  */

    ingresaLenguaje = prompt("Qué lenguaje de programacion estás estudiando?");

    if (ingresaLenguaje === "") {

        alert("Por favor, ingresa un lenguaje de programación .");
    }
}

alert(`Hola ${ingresaNombre}, tienes ${ingresaEdad} años y ya estás aprendiendo ${ingresaLenguaje}`)


PreguntaGustarEstudiar();  /* llama a la funcion PreguntaGustarEstudiar*/




function PreguntaGustarEstudiar(){ /* funcion la cual pregunta al usuario si le gusta estudiar el lenguaje de programacion*/


    gustarEstudiar = parseInt(prompt(`¿Te gusta estudiar ${ingresaLenguaje}? Responde con el número 1 para SÍ o 2 para NO.`));  /*captura respuesta*/

    if (gustarEstudiar === 1) {                                                  /*si la respuesta es 1*/

        alert( "¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    
    }
    
        else  {
            if (gustarEstudiar === 2){                                              /*si la respuesta es 2*/
    
          alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
            }
             else {
    
                alert("debes agregar un numero del 1 al 2"); 
                PreguntaGustarEstudiar();                                        /*si el usuario no agrega ningun valor genera un mensaje y llama nuevamente a la funcion*/            }
        }
}