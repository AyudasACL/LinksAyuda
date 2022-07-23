//Codigo creado por Javier Bagatoli 16/02/2022

import { datos } from "./docs/dataInfo.js";

const dataBase = datos;

const boton = document.getElementById("lista");
boton.innerHTML = generarLista();

function generarLista() {
  const lista = dataBase;
  let listaCompletada = "<br/>";
  for (let pagina in dataBase) {
    listaCompletada += `
    <article class="articulo">
      <h3 class="text-white" title="${dataBase[pagina].descripcion}">${dataBase[pagina].nombre}</h3>
      <a href=${dataBase[pagina].link}>${dataBase[pagina].linkNombre}Canva</a>
    </article>`;
  }
  return listaCompletada;
}
