const notasAleatorias = (min, max) => {
    let nota = Math.random() * (max - min + 1) + min
    return nota.toFixed(1)
}
const estudiantes = {
    "Bootcamp Fullstack": [
        {
            id: 1,
            nombre: 'Daniel Mejía',
            notas: [
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4)
            ],
            descuento: null,
            beca: null,
            grado: null
        },
        {
            id: 2,
            nombre: 'Pascual Bello',
            notas: [
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4)
            ],
            descuento: null,
            beca: null,
            grado: null
        },
        {
            id: 3,
            nombre: 'Cristian Gallego',
            notas: [
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4)
            ],
            descuento: null,
            beca: null,
            grado: null
        },
        {
            id: 4,
            nombre: 'Salvador Cerinza',
            notas: [
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4)
            ],
            descuento: null,
            beca: null,
            grado: null
        },{
            id: 5,
            nombre: 'Luis Courtuis',
            notas: [
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4)
            ],
            descuento: null,
            beca: null,
            grado: null
        },
        {
            id: 6,
            nombre: 'Danna Galeano',
            notas: [
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4),
                notasAleatorias(2, 4)
            ],
            descuento: null,
            beca: null,
            grado: null
        }
    ]
}

let body = document.querySelector('body')

const div = document.createElement('div')
div.className = 'container bg-light text-dark'
body.appendChild(div)

const h1 = document.createElement('h1')
h1.classList.add('text-center')
h1.textContent = 'Estudiantes Bootcamp Fullstack'
div.appendChild(h1)

const table = document.createElement('table')
table.className = 'table table-success mt-5'
div.appendChild(table)

const tHead = document.createElement('thead')
table.appendChild(tHead)

const tr = document.createElement('tr')
tHead.appendChild(tr)

const th1 = document.createElement('th')
th1.setAttribute('scope', 'col')
th1.textContent = 'ID'
tr.appendChild(th1)

const th2 = document.createElement('th')
th2.setAttribute('scope', 'col')
th2.textContent = 'Nombre'
tr.appendChild(th2)

const th3 = document.createElement('th')
th3.setAttribute('scope', 'col')
th3.textContent = 'Promedio'
tr.appendChild(th3)

const th4 = document.createElement('th')
th4.setAttribute('scope', 'col')
th4.textContent = 'Descuento'
tr.appendChild(th4)

const th5 = document.createElement('th')
th5.setAttribute('scope', 'col')
th5.textContent = 'Beca'
tr.appendChild(th5)

const th6 = document.createElement('th')
th6.setAttribute('scope', 'col')
th6.textContent = 'Grado'
tr.appendChild(th6)

const tBody = document.createElement('tbody')
table.appendChild(tBody)

const arrEstudiantes = estudiantes["Bootcamp Fullstack"]

const generarTabla = () => {
    let estudiantesGraduados = 0
    arrEstudiantes.forEach(item => {
        let promedio = calcularPromedio(item.notas)
        if(promedio < 3){
            item.grado = false
            item.descuento = 'No'
            item.beca = 'No'
        }else if(promedio >= 3 && promedio <= 4){
            item.grado = true
            item.descuento = '5%'
            item.beca = 'No'
        }else if(promedio > 4 && promedio <= 4.5){
            item.grado = true
            item.descuento = '15%'
            item.beca = 'Media Beca'
        }else if(promedio > 4.5 && promedio <= 5){
            item.grado = true
            item.descuento = '15%'
            item.beca = 'Beca Completa'
        }
        tBody.innerHTML += `
            <tr>
                <th scope="row">${item.id}</th>
                <th>${item.nombre}</th>
                <th>${promedio}</th>
                <th>${item.descuento}</th>
                <th>${item.beca}</th>
                <th>${(item.grado === true) ? 'Si' : 'No'}</th>
            </tr>
        `
        if(item.grado === true){
            estudiantesGraduados += 1
        }
    })
    body.innerHTML += `
        <h2 class="text-center">Celebramos el grado de ${estudiantesGraduados} estudiantes</h2>
    `
}

const calcularPromedio = (arr) => {
    let suma = 0
    let promedio
    for(let i = 0; i <= arr.length - 1; i++){
        suma += parseFloat(arr[i])
    }
    promedio = suma / arr.length
    return promedio.toFixed(1)    
}

generarTabla()