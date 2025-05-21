// Ejercicio 1
//Escribe una arrow funtion que tome como entrada un objeto y devuelva una lista con sus propiedades. Solo puede tener como entrada un objeto y el tipo de vuelta tiene que ser un array.
const obtenerValoresDeObjeto = (obj) => {
  return Object.values(obj);
};

const person = {
  name: "Johany",
  age: 30,
  profession: "Consultor de Proyectos"
};

const resultado = obtenerValoresDeObjeto(person);
console.log(resultado); // Imprime: ["Johany", 30, "Consultor de Proyectos"]


// Ejercicio 2

//Enumera los distintos valores que puede tener “this” y pon un ejemplo de cada uno
//Función Global

function funcionGlobal() {
  console.log("this en función global:", this);
}
funcionGlobal();

//Método de Objeto
const miObjeto = {
  nombre: "Juan",
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

miObjeto.saludar(); 

//Constructor de Función
function Persona(nombre) {
  this.nombre = nombre;
  console.log("this en constructor:", this);
}

const persona1 = new Persona("María")// Imprime: Persona { nombre: "María" }
console.log(persona1.nombre);//Imprime: María

//call(), apply(), y bind()

function saludar(saludo) {
  console.log(saludo + ", " + this.nombre);
}

const persona = { nombre: "Carlos" };

saludar.call(persona, "Hola");   // Imprime: "Hola, Carlos"
saludar.apply(persona, ["Qué tal"]); // Imprime: "Qué tal, Carlos"

const saludarACarlos = saludar.bind(persona);
saludarACarlos("Saludos");       // Imprime: "Saludos, Carlos"

//Funciones de Flecha
const miObjeto = {
  nombre: "Ana",
  saludar: function() {
    setTimeout(() => {
      console.log("Hola, soy " + this.nombre);
    }, 1000);
  }
};

miObjeto.saludar(); // Imprime "Hola, soy Ana" después de 1 segundo

//¿Qué diferencias hay entre las arrow functions y las function expressions?
This: El valor de this dentro de una función de flecha se hereda del contexto circundante, mientras que en una function expression, this se determina por cómo se llama la función.
Sintaxis: Las funciones de flecha tienen una sintaxis más corta y concisa que las function expressions.
Constructor: Las funciones de flecha no se pueden usar como constructores (con new), pero las function expressions sí.
Objeto arguments: Las funciones de flecha no tienen el objeto arguments.   
        

// Ejercicio 3

//Crea una clase a la que llamaremos "InvertirCadena" con las siguientes propiedades 
class InvertirCadena {

//Un atributo llamado cadenaInvertir que sea una cadena vacía.

constructor() {
    this.cadenaInvertir = ""; // Atributo inicializado como cadena vacía
  }


//Una función en formato arrow function, que tome el atributo cadenaInvertir e imprima en pantalla el resultado invertido. Ej "Hola mundo" quedaría "odnum aloH".

const cadenaInvertida = this.cadenaInvertir.split("").reverse().join("");
    console.log(cadenaInvertida);
  };
}




//Si el parámetro de la cadena cadenaInvertir es vacío, lance un error (throw). Ej. "". throw error.

invertir = () => {
    if (this.cadenaInvertir === "") {
      throw new Error("La cadena a invertir no puede estar vacía.");




//Ahora instancia la clase en un objeto que llamaremos invertirCadena.

const invertirCadena = new InvertirCadena();


//Ejecuta primero la función sin cambiar cadenaInvertir.

try {invertirCadena.invertir(); // Lanza el error: "La cadena a invertir no puede estar vacía."
} catch (error) {
  console.error(error.message); // Capturamos e imprimimos el mensaje de error
}

//¿Cómo podemos hacer para que nuestro código no rompa al ejecutarse?

Para que no rompa, podemos envolver la llamada en un bloque try-catch.

“”Ahora cambia el valor a cadenaInvertir y vuelve a llamar la función. 

invertirCadena.cadenaInvertir = "Hola mundo";
invertirCadena.invertir(); // Imprime: "odnum aloH"

//¿Cuál es el resultado?
Imprime el mensaje de la cadena invertida

//Acceder al siguiente método invertirCadena.nuevoMetodo()
Esto daría un error porque nuevoMetodo no está definido.

//¿Cómo podemos hacer para que no de un error?
Para que no de error, podemos añadir el método al prototipo de la clase:

InvertirCadena.prototype.nuevoMetodo = function() {
  console.log("Este es un nuevo método de la clase InvertirCadena.");
};

invertirCadena.nuevoMetodo(); // Ahora funciona e imprime el mensaje.

// Ejercicio 4
//Crea una clase con el formato ES6.
//Esta clase va a tener dos atributos, username y password y un método login() que compruebe que username tiene el valor admin y password el valor passwd y en caso positivo, lance una alerta diciendo que el usuario esté logeado, en caso contrario, que diga que el usuario o la contraseña son incorrectas.
class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") {
      alert("Usuario logeado exitosamente.");
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }
}

// Ejemplo de uso:
let usuario1 = new Usuario("admin", "passwd");
usuario1.login(); // Muestra la alerta de inicio de sesión exitoso

let usuario2 = new Usuario("usuario", "contrasena");
usuario2.login(); // Muestra la alerta de usuario o contraseña incorrectos




// Ejercicio 5



// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
