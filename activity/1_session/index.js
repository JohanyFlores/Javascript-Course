// Ejercicio 1
import {miNombre, miProfesion, miPuesto} from "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

//¿Qué se ejecuta antes, la llamada a console.log() o el contenido del fichero aboutme.js?
  
El contenido de aboutme.js se ejecuta primero 
  
//¿Por qué? 
Para qué que la exportación este disponible antes de que el código en el archivo importador, y así la llamada a console.log(“Ej 1”), pueda utilizarce.
// Ejercicio 3

  for (let i = 1; i <= 100; i++) {
       if (i % 7 === 0) {
         console.log(i);
       }
  
  
// Ejercicio 4

  //Qué valor tendrá la variable i al finalizar el bucle? 
  Al finalizar el bucle la variable i tendra el valor de 101

  //¿Por qué? 
    La condicion para continuar iterando el bucle el número tiene que ser menor a 101, y al tomar i el valor de 101 la condicion 
  
  //¿Habría alguna forma de evitar que la variable i se declare de forma global?
  

// Ejercicio 5

¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?

// Ejercicio 6
//Crea un objeto llamado formatter con un atributo, que llamaremos prefix, que tendrá de valor “Hello “, y un método que llamaremos append, que imprimirá la concatenación entre el atributo prefix y la cadena que pasemos como argumento en el método.

const formatter = {
  prefix: "Hello ", // Atributo prefix con el valor "Hello "
  append: function(str) {
    // Método append que concatena el atributo prefix y la cadena str
    console.log(this.prefix + str);
  }
};
formatter.append("World");// Imprime "Hello World"

//Una vez el objeto esté creado añade mediante el atributo prototype (buscad en la documentación) otro método que acepte también un solo argumento e imprima esa misma cadena en minúsculas.

formatter.constructor.prototype.toLower = function(str) {
  console.log(str.toLowerCase());
};
  formatter.toLower("World"); // Imprime "world"
