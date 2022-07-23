//Codigo creado por Javier Bagatoli 16/02/2022

import { datos } from "./docs/dataInfo.js";

const dataBase = datos;

const listaDeFront = document.getElementById("lista-front");
listaDeFront.innerHTML = generarListaFront("front");

const listaDeDiseño = document.getElementById("lista-diseño");
listaDeDiseño.innerHTML = generarListaFront("diseño");

const listaDeWebApps = document.getElementById("lista-webapps");
listaDeWebApps.innerHTML = generarListaFront("webapps");

function generarListaFront(tipo) {
  let tipoLista = `lista-de-${tipo}`;
  let listaCompletada = `<button id=${tipoLista}>Lista ${tipo}</button><br/>`;
  for (let pagina in dataBase) {
    if (dataBase[pagina].categorias[0] === tipo) {
      listaCompletada += `
      <article class="articulo">
        <h3 class="text-white" title="${dataBase[pagina].descripcion}">${dataBase[pagina].nombre}</h3>
        <a href=${dataBase[pagina].link}>${dataBase[pagina].linkNombre}</a>
      </article>`;
    }
  }
  return listaCompletada;
}

const botonFront = document.getElementById("boton-seccion-front");
const listaFront = document.getElementById("lista-de-front");

const botonDiseño = document.getElementById("boton-seccion-diseño");
const listaDiseño = document.getElementById("lista-de-diseño");

const botonWebapps = document.getElementById("boton-seccion-webapps");
const listaWebapps = document.getElementById("lista-de-webapps");

botonFront.addEventListener("click", () => focusFront());
botonDiseño.addEventListener("click", () => focusDiseño());
botonWebapps.addEventListener("click", () => focusWebapps());

function focusFront() {
  listaFront.focus({ preventScroll: false });
}

function focusDiseño() {
  listaDiseño.focus({ preventScroll: false });
}

function focusWebapps() {
  listaWebapps.focus({ preventScroll: false });
}
