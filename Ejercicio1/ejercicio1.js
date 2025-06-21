/* Interactuar con el usuario y preguntarle su nombre, 
si su nombre tiene mas de 7 letras le preguntamos su edad, si su edad es mayor de 18, le daremos un 50 % de descuento, 
si tiene más de 30, le daremos un 30%, pero si tiene 45 o más, le daremos un 15 % de descuento */

// Pedir el nombre al usuario
let nombre = prompt("¿Cual es tu nombre?");
console.log("Nombre ingresado:", nombre);

// Verificar si el nombre tiene más de 7 letras
if (nombre.length > 7) {
  console.log("Tu nombre tiene más de 7 letras.");

  // Pedir la edad
  let edad = parseInt(prompt("¿Cuantos años tienes?"));
  console.log("Edad ingresada:", edad);

  // Verificar edad y aplicar descuento
  if (edad >= 45) {
    console.log("Tienes un 15% de descuento.");
  } else if (edad > 30) {
    console.log("Tienes un 30% de descuento.");
  } else if (edad > 18) {
    console.log("Tienes un 50% de descuento.");
  } else {
    console.log("Lo siento, no hay descuento para tu edad.");
  }
} else {
  console.log("Tu nombre tiene 7 letras o menos. No aplicas para descuentos.");
}
