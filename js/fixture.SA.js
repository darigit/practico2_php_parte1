'use strict'
 let arreglo_lista = new Array();
 let lista_tareas = document.querySelector('#tareas');
  document.querySelector("#btn_agregar").addEventListener('click',AgregarDatos);
  document.getElementById('btn_contar').addEventListener('click',ContarDatos);

  function ContarDatos(){
    let cantidad = document.querySelectorAll('#tareas > li').length;
    alert("cantidad de li"+" "+cantidad);
  }

  function AgregarDatos(){

    lista_tareas.innerHTML="";
    let nombre = document.querySelector("input[name=nombre]").value;
    arreglo_lista.push(nombre);
    for (var i = 0; i < arreglo_lista.length; i++) {
      lista_tareas.innerHTML += "<li>"+arreglo_lista[i]+"</li>";
    }
   }
