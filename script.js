const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//CREAR LISTA DE TAREAS
let listaDeTareas = [
  "Estudiar HTML desde cero",
  "Estudiar CSS desde cero",
  "Estudiar JavaScript desde cero",
  "Estudiar NODEJS desde cero",
];


///Agregar tarea
function agregarTarea(tarea) {
  listaDeTareas.push(tarea);
}

agregarTarea("Estudiar REACT desde cero");

console.log("Lista De Tareas: " + listaDeTareas);



///Eliminar tarea
function quitarTarea(removerTarea) {
  let posicion = listaDeTareas.indexOf(removerTarea);
  if (posicion !== -1) {
    listaDeTareas.splice(posicion, 1);
  }
}

quitarTarea("Estudiar CSS desde cero");

console.log("Lista De Tareas Actualizada: " + listaDeTareas);

//elegir que funcion usar

function iniciar() {
    rl.question("¿Qué te gustaría hacer? (agregar/quitar/mostrar/salir): ", (opcion) => {
      switch(opcion) {
        case "agregar":
          rl.question("¿Qué tarea te gustaría agregar?: ", (tarea) => {
            agregarTarea(tarea);
            iniciar();
          });
          break;
        case "quitar":
          rl.question("¿Qué tarea te gustaría quitar?: ", (removerTarea) => {
            quitarTarea(removerTarea);
            iniciar();
          });
          break;
        case "mostrar":
          console.log(listaDeTareas);
          iniciar();
          break;
        case "salir":
          rl.close();
          break;
        default:
          console.log("Opción no válida");
          iniciar();
      }
    });
  }
  
  iniciar();
