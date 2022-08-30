const usuario = {
    id: 1,
    nombre: 'prueba',
    apellidos:'apellidos de prueba',
    email: 'prueba@prueba.com',
    saldo: 200000,
    videojuegos_favoritos: [
        {
            juego: 'Call of Duty War zone',
            categoria: 'accion'
        },
        {
            juego: 'Rocket League',
            categoria: 'deportes'
        }
    ],
    comida_favorita: {
        comida: 'lasagna',
        bebida: 'cerveza'
    }
}
/*

usuario['videojuegos favoritos'][1].categoria = 'accion'
usuario['videojuegos recientes'] = {
    nombre: 'Guardianes de la galaxia',
    categoria: 'fantasia'
}
console.log('comida favorita' in usuario)
delete usuario['comida favorita']
console.log('comida favorita' in usuario)
usuario.nombre = 'Carlos'
usuario.apellidos = 'Quevedo'

for(let myUser in usuario){
    console.log(myUser)
}
*/


const { id, nombre, apellidos, email, saldo, videojuegos_favoritos, comida_favorita } = usuario

Object.freeze(usuario)
const lista = Object.keys(usuario)
