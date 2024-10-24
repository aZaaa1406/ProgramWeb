//arreglos
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
}
