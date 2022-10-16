// console.log("Hello, world");

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);
// console.log(h1);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// //Cambiando el contenido de un elemento hmtl
// h1.innerHTML = 'Patito <br> Feo'; // Convierte a código html, tener cuidado por seguridad
// h1.innerText = 'Patito <br> Feo'; //Convierte a texto plano

// //Obteniendo y cambiando atributos de un elemento html
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// //Agregando y removiendo clases en elementos html
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('verde');
// // h1.classList.contains('verde');

// input.value = "456";

// // Creando nuevos elementos html
// const img = document.createElement('img');
// img.setAttribute('src', 'https://www.redhat.com/cms/managed-files/tux-327x360.png');
// console.log(img);
// // Retirando texto para solo dejar la imagen
// pid.innerHTML = "";
// pid.appendChild(img);

// -------------------------

// const h1 = document.querySelector('h1');
// const input1 = document.querySelector('#calculo1');
// const input2 = document.querySelector('#calculo2');
// const btn = document.querySelector('#btnCalcular');
// const pResult = document.querySelector('#result');

// function btnOnClick() {
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: " + sumaInputs;    
// }

// ---------------------------

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarImputValues);

function sumarImputValues(event) {
    console.log({event});
    event.preventDefault(); // Previene el comportamiento por defautl para recargar formulario
    const sumarImputs = Number(input1.value) + Number(input2.value);
    pResult.innerHTML = "Resultado: " + sumarImputs;
}