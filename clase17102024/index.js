document.title = 'Clase de JS'
console.log(document.title);

const h1 = document.createElement("h1")
h1.textContent = "Texto desde la capa de la lógica";
document.body.appendChild(h1)

const parrafo = document.createElement("p")
parrafo.textContent = "Parrafo desde la capa de la lógica"
document.body.appendChild(parrafo)