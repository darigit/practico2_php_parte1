'use strict'

let fixtureURL = "https://web-unicen.heroKuapp.com/api/groups/";
let group = "jorgedari";
let collection = "entradas";

 document.getElementById('btnEnviar').addEventListener('click',enviarEntradas);
 document.getElementById('btnFinal').addEventListener('click',entradas_vendidas);


 function entradas_vendidas()
 {

   let options =
   {
     "method": "PUT",
     "headers":{"content-type":"application/json"},
     "body":true
   };
   fetch(fixtureURL+group+"/"+collection+"/78F2",options).
   then(function(r)
      {
       if(!r)
       {
         console.log('Error de repuesta');
       }
       return r.json()
      }).then(function(json)
      {
         for (let datas of json.entradas)
         {
         console.log(datas.thing.id);
         }
      })
 } // fin de la function

function enviarEntradas(){
  let losDatos = {
    "thing":{
      "instancia": "final",
      "precio":"3800"
    }
  };
  let options = {
    "method": "POST",
    "headers":{"content-type":"application/json"},
    "body":JSON.stringify(losDatos)
  };
  fetch(fixtureURL+group+"/"+collection,options).
  then(function(fix){
    if(!fix){
      alert("error de REPUESTA")
    }
    return fix.json()
   })
    .then(function(json){
     console.log(JSON.stringify(losDatos));
     mostrarDatos();
    }).catch(function(e) {
      alert("error de CONEXION");
    })
  }


function mostrarDatos()
{
   //let lista = document.getElementById('listaEntradas > ul ');
   let lista = document.querySelector("#listaEntradas ul");
   lista.innerHTML = "<li> Cargando Datos </li>";
   fetch(fixtureURL+group+"/"+collection).then(r => {
     return r.json();
   }).then(js => {
     console.log(js);
         lista.innerHTML = "";
         for(let datos of js.entradas){
           lista.innerHTML +="<li>"+datos.thing.instancia+""+datos.thing.precio+"</li>";
         }
       }).catch(error => console.log(error))
 }
