const data = `
{
    "nombre": "Sebas",
    "apellidos": "Amaya",
    "email": "prueba@prueba.com",
    "comida favorita": [
        {
            "comida": "pizza",
            "bebida": "cerveza"
        },
        {
            "comida": "lasagna",
            "bebida": "cocacola"
        }
    ]
}
`
console.log(data)
const parseData = JSON.parse(data)
console.log(JSON.stringify(parseData))