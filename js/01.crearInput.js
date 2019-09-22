'use strict'
  alert('Estoy en la funcion ahoa !!!!');
  document.getElementById("btn").addEventListener('click',seleccionarEjercicio);

   function seleccionarEjercicio()
   {
     let elementos=document.querySelector("input[name=btn]").value;
     let contenedor=document.querySelector("#listaInputs");
         contenedor.innerHTML = "<p>Loading !!!! </p>"+elementos;
     switch (elementos) {
       case "ej1":
        
        document.getElementById("display").value="TP Ejercicio 1";
         break;
      case "ej2":
          document.getElementById("display").value="TP Ejercicio 2";
           break;
     
       default:
         break;
     }
    
    
   }
