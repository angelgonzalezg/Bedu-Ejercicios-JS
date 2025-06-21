/* 
1 Obtener el nombre de las materias activas
2 Obtener promedio de todas las materias
3 Obtener los 3 mejores promedios de la escuela
4 Obtener el promedio de la escuela
5 Obtener promedio de la escuela por genero */

// Escuela BEDU
const escuela = {
  nombre: "Escuela BEDU",
  horario_inicia: "07:00",
  horario_termina: "19:00",
  materias: [
    { nombre: "Matematicas", estatus: true, id: 1 },
    { nombre: "Español", estatus: true, id: 2 },
    { nombre: "Ciencias", estatus: false, id: 3 },
    { nombre: "Taller", estatus: true, id: 4 },
  ],
  alumnos: [
    { nombre: "Sasha", edad: 15, cursando: true, genero: "F", materias: [1, 4], calificaciones: [
        { materia: 1, calificacion: 7 },
        { materia: 4, calificacion: 9 },
    ]},
    { nombre: "German", edad: 16, cursando: false, genero: "M", materias: [2, 3, 4], calificaciones: [
        { materia: 2, calificacion: 10 },
        { materia: 3, calificacion: 8 },
        { materia: 4, calificacion: 5 },
    ]},
    { nombre: "Antonio", edad: 14, cursando: true, genero: "M", materias: [4], calificaciones: [
        { materia: 4, calificacion: 9.9 },
    ]},
    { nombre: "Gabriela", edad: 15, cursando: false, genero: "F", materias: [1, 2, 3, 4], calificaciones: [
        { materia: 1, calificacion: 10 },
        { materia: 2, calificacion: 9 },
        { materia: 3, calificacion: 9 },
        { materia: 4, calificacion: 8 },
    ]},
    { nombre: "Gael", edad: 10, cursando: true, genero: "M", materias: [2, 4], calificaciones: [
        { materia: 2, calificacion: 10 },
        { materia: 4, calificacion: 10 },
    ]},
  ]
};

// 1. Obtener nombre de las materias activas
const materiasActivas = escuela.materias
  .filter(m => m.estatus)       // Filtra solo las materias con estatus true
  .map(m => m.nombre);          // Extrae solo el nombre
console.log("1. Materias activas:", materiasActivas);

// 2. Calcular promedio de todas las calificaciones
const todasLasCalificaciones = escuela.alumnos.flatMap(a => a.calificaciones);
// flatMap junta todos los arreglos de calificaciones de cada alumno
const sumaTotal = todasLasCalificaciones.reduce((acc, cal) => acc + cal.calificacion, 0);
const promedioTotalMaterias = sumaTotal / todasLasCalificaciones.length;
console.log("2. Promedio de todas las materias:", promedioTotalMaterias.toFixed(2));

// 3. Obtener los 3 mejores promedios por alumno
const promediosAlumnos = escuela.alumnos.map(alumno => {
  // Sumamos calificaciones de cada alumno
  const total = alumno.calificaciones.reduce((acc, c) => acc + c.calificacion, 0);
  const promedio = total / alumno.calificaciones.length;
  return { nombre: alumno.nombre, promedio }; // Retorna nombre y promedio
});

const top3 = promediosAlumnos
  .sort((a, b) => b.promedio - a.promedio) // Orden descendente por promedio (orden ascendente seria a.promedio - b.promedio)
  .slice(0, 3);                            // Toma los primeros 3
console.log("3. Top 3 promedios:", top3);

// 4. Promedio general de la escuela (promedio de promedios)
const promedioEscuela = promediosAlumnos
  .reduce((acc, a) => acc + a.promedio, 0) / promediosAlumnos.length;
console.log("4. Promedio general de la escuela:", promedioEscuela.toFixed(2));

// 5. Promedio de la escuela por genero (Femenino y Masculino)
const generos = ["F", "M"];
const promediosPorGenero = generos.map(genero => {
  // Filtra alumnos del genero actual
  const alumnosGenero = escuela.alumnos.filter(a => a.genero === genero);

  // Calcula promedio individual por alumno
  const promedios = alumnosGenero.map(alumno => {
    const total = alumno.calificaciones.reduce((acc, c) => acc + c.calificacion, 0);
    return total / alumno.calificaciones.length;
  });

  // Saca promedio general del grupo
  const promedioGenero = promedios.reduce((a, b) => a + b, 0) / promedios.length;

  return { genero, promedio: promedioGenero.toFixed(2) };
});

console.log("5. Promedio por género:", promediosPorGenero);
