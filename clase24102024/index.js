/*arreglos
const tareas = ["dato1",1,Boolean]

console.log(tareas[2]);

console.log(tareas[3]);

const array = []
for(let i = 0; i<10; i++){
    array.push(5*(i+1))

    console.log(`5*${i+1} = ${array[i]}`);
    if(array.length === 6){
        console.log(`Fin del arreglo en la posicion 6 = ${array[i]}`);
        break;
    }
}*/
/*
//Eliminar elementos de un array
const array = ["dato1","dato2","dato3", "dato4"]
array.push("New value")
console.log(array[3]);

//Eliminar
array.splice(1,1)
console.log(array);
*/
const tareas = [];
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();

    var tarea = document.getElementById("iTarea").value;

    tareas.push(tarea);
    document.getElementById("iTarea").value = "";

    console.log(tareas);

    const listaTareas = document.getElementById("lista-tareas");
    listaTareas.innerHTML = ""; // Limpiar el contenedor de tareas para evitar duplicados

    tareas.forEach((element, index) => {
        const TAREA = document.createElement("p");
        TAREA.textContent = element;

        const eliminar = document.createElement("button");
        eliminar.textContent = "eliminar";

        eliminar.addEventListener("click", () => {
            tareas.splice(index, 1); // Eliminar la tarea del array
            renderTareas(); // Volver a renderizar las tareas actualizadas
        });

        listaTareas.append(TAREA);
        listaTareas.append(eliminar);
    });
});

function renderTareas() {
    const listaTareas = document.getElementById("lista-tareas");
    listaTareas.innerHTML = "";

    tareas.forEach((element, index) => {
        const TAREA = document.createElement("p");
        TAREA.textContent = element;

        const eliminar = document.createElement("button");
        eliminar.textContent = "eliminar";

        eliminar.addEventListener("click", () => {
            tareas.splice(index, 1); 
            renderTareas(); 
        });

        listaTareas.append(TAREA);
        listaTareas.append(eliminar);
    });
}

