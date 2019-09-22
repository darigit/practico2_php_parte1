'use strict'
 document.querySelector("#btn_agregar").addEventListener('click',addEmpleado);
 document.querySelector("#btn_eliminar").addEventListener('click',deleteEmpleado);
 document.querySelector("#lista_de_Empleados");
 let arreglo_empleados = new Array();

 function addEmpleado()
 {
   lista_de_Empleados.innerHTML="";
   let Nro_empleado=document.querySelector('input').value;
   arreglo_empleados.push(Nro_empleado);
   for (let i=0;arreglo_empleados.length;i++)
   {
     lista_de_Empleados.innerHTML +="<li>"+arreglo_empleados[i]+"</li>";
   }
 }

function deleteEmpleado()
{
lista_de_Empleados.innerHTML="";
let Nro_empleado=document.querySelector('input').value;
let posicion = arreglo_empleados.indexOf(Nro_empleado);
if (posicion != -1)
{
  alert("lo encontre");
  let eliminar = arreglo_empleados.splice(posicion,1); // elimino el empleado buscado
  for (let i=0;arreglo_empleados.length;i++)
  {
    lista_de_Empleados.innerHTML +="<li>"+arreglo_empleados[i]+"</li>";
  }
}

}
