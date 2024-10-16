//Definicion de una funcion
/*
function hello(){
    console.log('hola clase');
    console.log('5IV7');
}

//llamada a la funcion
hello();
hello();
hello();
hello();
hello();
*/
/*
function hello(){
    return 'hola clase'
}
const result = hello();

console.log(result);*/

//funcion que retorna otra funcion
/*
function hello(){
    return function (){
        return 'hola soy la funcion 2'
    }
}
console.log(hello()());*/
/*funcion con parametros
function add(x){
    console.log(x);
}
add(3);*/
/*funcion con multiples parametros
function add(x,y){
    console.log(x+y);
}

add(5,10)*/

/*control de error multiples paramentros
function add(x,y){
    if(y=== undefined){
        y=0
    }
    console.log(x+y);
}
add(5, undefined)*/
//parametro tipo cadena
/*function add(name){
    console.log("ola "+ name);
}
add("Aza")*/

const user = [{
    nombre: "Aza",
    apellidoP: "Valdez",
    apellidoM: "Avendaño",
    edad: 69,
    direccion: {
        calle: "papu",
        no: 666,
        colonia: "tu corazon",
        delegacion: "Iztapayork"
    },
    amigos: ["cookie", "Tio"],
    activo: true
}]

//nombre completo
function mostrar(user){
    const nombre = user.nombre;
    const apellidoP = user.apellidoP;
    const apellidoM = user.apellidoM;
    const edad = user.edad;
console.log(nombre, "\napellido paterno: ", apellidoP, "\n apellido materno: ", apellidoM, "\nedad: ",edad);
    const alerta = ()=>{
        let estado;
        if(user.activo === true){
            estado= activo;
        }
        alert(estado);
    }
    const calle = ()=>{
        alert("Calle no colonia delegacion")
    }
    
}

mostrar(user)
