

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