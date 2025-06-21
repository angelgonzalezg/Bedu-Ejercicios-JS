class Dueno {
    constructor(nombre) {
        this.nombre = nombre;
        this.mascotas = [];
    }
}

class Mascota {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

let duenos = [];
let continuar = true;

while (continuar) {
    let opcion = prompt(
        "¿Que deseas hacer?\n" +
        "1: Registrar dueño\n" +
        "2: Registrar mascota\n" +
        "3: Ver dueños y mascotas\n" +
        "0: Salir\n"
    );

    if (opcion === "1") {
        let nombre = prompt("Ingresa el nombre del dueño:");
        let dueno = new Dueno(nombre);
        duenos.push(dueno);
        alert("Dueño registrado: " + nombre);
    } else if (opcion === "2") {
        if (duenos.length === 0) {
            alert("Primero debes registrar un dueño.");
            continue;
        }

        let nombreMascota = prompt("Nombre de la mascota:");
        let tipo = prompt("Tipo de mascota:");

        // Mostrar lista de dueños
        let lista = "Elige el número del dueño:\n";
        for (let i = 0; i < duenos.length; i++) {
            lista += i + 1 + ": " + duenos[i].nombre + "\n";
        }

        let indice = parseInt(prompt(lista)) - 1;

        if (duenos[indice]) {
            let mascota = new Mascota(nombreMascota, tipo);
            duenos[indice].mascotas.push(mascota);
            alert("Mascota registrada para: " + duenos[indice].nombre);
        } else {
            alert("Numero de dueño no válido.");
        }
    } else if (opcion === "3") {
        if (duenos.length === 0) {
            alert("No hay dueños registrados aún.");
            continue;
        }

        let resumen = "Dueños y sus mascotas:\n\n";
        for (let dueno of duenos) {
            resumen += "Dueño: " + dueno.nombre + "\n";
            if (dueno.mascotas.length === 0) {
                resumen += " - Sin mascotas registradas\n";
            } else {
                for (let mascota of dueno.mascotas) {
                    resumen +=
                        " - Mascota: " + mascota.nombre + " (" + mascota.tipo + ")\n";
                }
            }
            resumen += "\n";
        }

        alert(resumen);
    } else if (opcion === "0") {
        continuar = false;
        alert("Gracias por usar el registro de mascotas. Hasta luego!");
    } else {
        alert("Opción no válida. Intenta de nuevo.");
    }
}
