'use strict'
let url = "http://api.rusia2018.com/equipos";

 function cargar(url)
 {
   let contador=0;
   fetch(url).then(function(response)
   {
     if(!response.ok){
       console.log("Error de repuesta");
     }
     return response.json()
   }).then(function(js)
   {
     for (let data of js.equipos)
     {
       if (data.equipos.messi =="si"){
          contador++;
       }
       if (data.equipos == "italia"){
         borrar_el_ID(url+"/8");
       }
     }
     document.getElementById('cantMessi').innerHTML=contador;
   else {
     donde.innerHTML="Error de carga de la URL";
   }
 }).catch(function(error){
   donde.innerHTML="Error de conexion";
 });
}

function borrar_el_ID(url){
  fetch(url,{
    "method":"DELETE",
    "headers":{"content-type":"applicaction/json"}
  }).then(function(response){
    if(!response){
      console.log('Error de Carga');
    }
    else {
      cargar(url);
    }
  }).catch(function(eror){
    console.log("Error de conexion";)
  });
}
