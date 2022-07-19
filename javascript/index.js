//Codigo creado por Javier Bagatoli 16/02/2022

import { datos } from "./dataInfo.js";

const dataBase = datos;

const boton = document.getElementById("caminar");
boton.innerHTML = generarLista();

function generarLista() {
  const lista = dataBase;
  let listaCompletada = "";
  for (let pagina in dataBase) {
    listaCompletada += `
    <article class="articulo">
      <h3 class="text-white" title="${dataBase[pagina].descripcion}">${dataBase[pagina].nombre}</h3>
      <a href=${dataBase[pagina].link}>Canva</a>
    </article>`;
  }
  return listaCompletada;
}
