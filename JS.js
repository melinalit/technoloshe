

let nombre = "Melina"
let apellido = "Litvin"
let nombre_completo = nombre + " " + apellido


let numeros=[10,7,5,2,0]
console.table(numeros)

let persona = {
    Meli:{
        nombre : "Melina",
        edad : 30,
        vive :  true,
    },
    Dani: {
        nombre: "Daniela",
        edad: 28,
        vive: true
    }
}

for(let i=0; i<numeros.length ;i++){
    console.log(numeros[i])
} 

for(prop in persona ) {
    console.log(prop)
}

console.clear()
console.dir (document)
let item2 = document.getElementById("item2") 
console.dir ("item2")

let items = document.getElementsByClassName("item")
let lis = document.getElementsByTagName ("li")
console.dir(lis)

let p = document.createElement("p")
p.innerText = "Mi Nuevo Texto"
p.id = "nuevo"

console.log(p)

let body = document.querySelector ("body")
body.appendChild(p)

let 
let nuevoItem = document.createElement("li")
nuevoItem.innerText="Perritos"
nuevoItem.insertBefore()
