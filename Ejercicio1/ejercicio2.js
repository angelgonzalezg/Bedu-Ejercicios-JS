/* Somos una agencia de viajes, primero preguntarle si tiene un código de promoción, si tiene código de promoción, y que lo proporcione, tenemos tres códigos:
ABC456 - 25%
DEF778 - 50%
ZYX555 - 75%
y tenemos los siguientes destinos:
Amsterdam - $500 USD
Tokio - $700 USD
Mexico - $400 USD
Argentina - $600 USD
Después, preguntarle a que destino gustaría viajar, si el destino es diferente a los que tenemos, mandarle al usuario un mensaje de que el destino no esta disponible,
pero si es uno de los que tenemos, calcular el precio con el descuento si es que aplica
Como extra, para uno o los dos ejercicios, preguntarle al usuario si desea realizar una nueva operación, todo esto mediante prompt */

let continuar = true;

while (continuar) {
  let descuento = 0;
  let tieneCodigo = prompt("¿Tienes codigo de promocion? (y/n)");

  if (tieneCodigo === "y") {
    let codigo = prompt("Ingresa tu codigo:").toUpperCase(); // Escribe el codigo en mayusculas
    if (codigo === "ABC456") {
      descuento = 0.25;
    } else if (codigo === "DEF778") {
      descuento = 0.50;
    } else if (codigo === "ZYX555") {
      descuento = 0.75;
    } else {
      console.log("Código no valido.");
    }
  }

  let destino = prompt("¿A que destino quieres viajar? (Amsterdam, Tokio, Mexico, Argentina)").toLowerCase();
  let precio = 0;

  if (destino === "amsterdam") {
    precio = 500;
  } else if (destino === "tokio") {
    precio = 700;
  } else if (destino === "mexico") {
    precio = 400;
  } else if (destino === "argentina") {
    precio = 600;
  } else {
    console.log("Destino no disponible.");
  }

  if (precio > 0) {
    let total = precio - (precio * descuento);
    console.log("Destino:", destino);
    console.log("Precio original: $" + precio);
    console.log("Descuento: " + (descuento * 100) + "%");
    console.log("Total a pagar: $" + total);
  }

  let otraOperacion = prompt("¿Quieres hacer otra operacion? (y/n)").toLowerCase();
  if (otraOperacion !== "y") {
    continuar = false;
    console.log("Gracias por tu preferencia!");
  }
}
