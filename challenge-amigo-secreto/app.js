// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresSorteo = []
const nonValidInput = 'Ingrese una expresion valida'


// Funcion que recopila nombres
function recopilarDatos(elemento) {
    let datosRecopilados = document.querySelector(elemento).value;
    return datosRecopilados.trim();
}

// Funcion que pushea elementos a una lista
function pushElement(lista, elemento) {
    let datosRecopilados = recopilarDatos(elemento)
    if (!isValid(datosRecopilados)) {
        alert(nonValidInput)
        limpiarCaja(elemento)
        return
    }
    lista.push(datosRecopilados);
    limpiarCaja(elemento)
    asignarlistaHtml('#listaAmigos', nombresSorteo)
    return console.log(lista);
}

// limpiar caja
function limpiarCaja(elemento) {
    document.querySelector(elemento).value = '';
    return;
}

// Asigna texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Filtro entrada valida
function isValid(elemento) {
    return elemento !== "" ? true : false
}

// Selecciona un elemento y un texto para cargarlo en un elemento HTML.
function asignarlistaHtml(idElemento, lista) {
    let elementoHTML = document.querySelector(idElemento);
    elementoHTML.innerHTML = `${lista.map(data => `<li>${data}</li>`).join('')}`;
    return;
}

// Funcion que sortea los nombres
function sortearAmigo(lista, idElemento) {
    if (nombresSorteo.length < 2) {
        alert('Ingrese al menos dos amigos para realizar el sorteo')
        return
    }
    let listaRandomizada = randomizarLista(lista);
    seleccionarPimerElementoLista(listaRandomizada, idElemento)
    return;
}

function seleccionarPimerElementoLista(lista, idElemento) {
    if (lista.length === 0) {
        alert('La lista está vacía');
        return;
    }
    let primerElemento = lista[0];
    let texto = `El amigo secreto es: ${primerElemento}`;
    asignarTextoElemento(idElemento, texto);
    return;
}

function randomizarLista(lista) {
    let listaRandomizada = lista.slice();
    for (let i = listaRandomizada.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [listaRandomizada[i], listaRandomizada[j]] = [listaRandomizada[j], listaRandomizada[i]];
    }
    return listaRandomizada;
}

// // Flattend a list.
// function 
