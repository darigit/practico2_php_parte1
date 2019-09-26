  'use strict'
    var arreglo = ['HTML',15,true];
    console.log (arreglo);
    var objeto = {
      nombre: 'html',
      duracion: 15,
      estado: true
    }
    console.log (objeto.nombre);

    document.getElementById("btn").addEventListener('click',ejecutar);

    function ejecutar(){
      let mes = document.getElementById("elMes").Value;
      mes=parseInt(mes);
      alert(mes);

    }
      
  
   
