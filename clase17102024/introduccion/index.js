document.title = "Iniciar sesion"

//Contenedor principal para el formulario
const container = document.createElement('div')
container.style.margin = '20px'
document.body.appendChild(container)

//crear titulo

const title = document.createElement('h2')
title.textContent = 'iniciar sesion'
container.appendChild(title)

const form = document.createElement('form')
container.appendChild(form)
//user
const usernamelabel = document.createElement('label')
usernamelabel.textContent = 'Nombre de usuario'
const usernameInput = document.createElement('input')
usernameInput.type = 'text'
usernameInput.required = true;
form.appendChild(usernamelabel)
form.appendChild(usernameInput)

//contraseña
const passwordlabel = document.createElement('label')
passwordlabel.textContent = 'Contraseña'
const passwordInput = document.createElement('input')
passwordInput.type = 'password'
passwordInput.required = true;
form.appendChild(passwordlabel)
form.appendChild(passwordInput)

//button
const btn = document.createElement('button')
btn.textContent = 'Enviar'
form.appendChild(btn)

//response

const message = document.createElement('h1')
container.appendChild(message);

//DATOS DE INICIO DE SESION
const validarUser = 'Zeque_dog';
const validarPasswor = 'DogIs4Life'

//Validar el user y password
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(validarUser === usernameInput.value && validarPasswor === passwordInput.value){
        message.textContent = 'Bienvenido'
        message.style.color = 'green'
    }else{
        message.textContent = 'Error en el login'
        message.style.color = 'red'
    }
})