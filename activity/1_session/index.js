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
  //Usando let en lugar de var: La palabra clave let introduce variables con ámbito de bloque. Esto significa que la variable i solo existirá dentro del bloque del bucle for.

  for (let i = 0; i < 101; i++) {
  // Solución
}
console.log(i); // Esto generaría un error (ReferenceError: i is not defined)
// Ejercicio 5

//¿Cuáles son las diferencias entre ejecutar un fichero JavaScript en un navegador web en formato <script> y en formato <script type=”module”>?
//Ámbito (Scope):
<script> (Script Clásico): Las variables y funciones declaradas en un script clásico se añaden al ámbito global (window en navegadores). Esto puede llevar a colisiones de nombres si diferentes scripts declaran variables o funciones con el mismo nombre.
<script type="module"> (Módulo ES): Los módulos ES tienen su propio ámbito local. Las variables y funciones declaradas dentro de un módulo no se añaden automáticamente al ámbito global. Para que sean accesibles desde otros scripts o desde el ámbito global, deben ser explicitamente exportadas usando la palabra clave export. Esto ayuda a evitar la contaminación del ámbito global y facilita la modularidad del código.
//Compartir Código (Modularidad):
<script>: Para compartir código entre diferentes archivos JavaScript, tradicionalmente se recurría a patrones como las Funciones Inmediatamente Invocadas (IIFEs), objetos globales o bibliotecas que gestionaban las dependencias. No hay un mecanismo nativo para la importación y exportación de código entre archivos.
<script type="module">: Introduce el sistema de módulos nativo de JavaScript (ES Modules). Permite importar código desde otros archivos JavaScript utilizando la palabra clave import y exportar código para que otros archivos lo utilicen mediante la palabra clave export. Esto fomenta una mejor organización del código, la reutilización y la gestión de dependencias.
//Orden de Ejecución:
<script>: Los scripts clásicos se ejecutan en el orden en que aparecen en el HTML, y la ejecución suele ser bloqueante del parsing del HTML (a menos que se utilicen los atributos async o defer).
<script type="module">: Los módulos ES también se ejecutan en el orden en que aparecen en el HTML, pero tienen un comportamiento diferente con respecto al bloqueo. Por defecto, los módulos se cargan con un comportamiento similar a defer, es decir, no bloquean el parsing del HTML y se ejecutan después de que el HTML ha sido completamente parseado. También se pueden usar con async.
//Modo Estricto ("use strict"):
<script>: El modo estricto debe activarse explícitamente añadiendo "use strict"; al principio del script o de una función.
<script type="module">: Los módulos ES siempre se ejecutan en modo estricto por defecto. No es necesario (ni se recomienda) añadir "use strict"; explícitamente en la parte superior de un módulo.
//this en el Ámbito Superior:
<script>: En el ámbito superior de un script clásico, el valor de this es el objeto global (window en navegadores).
<script type="module">: En el ámbito superior de un módulo ES, el valor de this es undefined.
//Funcionalidades Específicas:
<script>: No tiene acceso directo a las funcionalidades de importación y exportación de módulos.
<script type="module">: Permite usar import y export, así como la carga dinámica de módulos con la expresión import().
  
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
