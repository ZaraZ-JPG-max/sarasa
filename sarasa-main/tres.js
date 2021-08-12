/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas) */

function mostrar() 
{
  let tipo; 
  let origen; 
  let precio; 
  let seguir;
  let contMuneca = 0;
  let contRompecabezas = 0;
  let contPelota = 0;
  let totalPrecio = 0;
  let promedioJueImportados = 0;
  let acumPrecioImportados = 0;
  let contImportados = 0;
  let precioMasBarNac = 0;
  let flagRompeNac = 1;
  let iva;


  do 
  {
    
    tipo = prompt("Ingrese tipo de juguete: (muñeca/rompecabezas/pelota)").toLowerCase();
    while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota") 
    {
      tipo = prompt("Error, Reingrese tipo de juguete: (muñeca/rompecabezas/pelota)").toLowerCase();
    }
    origen = prompt("Ingrese el origen del juguete: (nacional/extranjero): ").toLowerCase();
    while (origen != "nacional" && origen != "extranjero") 
    {
      origen = prompt("Error, Reingrese el origen del juguete: (nacional/extranjero): ").toLowerCase();       
    }
    precio = parseInt(prompt("Ingrese precio del juguete: (entre $1000 y $5000)"));
    while (!(precio >=1000 && precio <= 5000)) 
    {
      precio = parseInt(prompt("Error Reingrese precio del juguete: (entre $1000 y $5000)"));
    }

    totalPrecio += precio;
    console.log(totalPrecio);
    

    switch (tipo) 
    {
      case "rompecabezas":
        contRompecabezas++;

          if (flagRompeNac || (origen == "nacional" && precio < precioMasBarNac)) 
          {
            precioMasBarNac = precio;
            flagRompeNac = 0;
          }
        break;

      case "muñeca":
        contMuneca++;
        break;

      case "pelota":
        contPelota++;
        break;
    }
    
    if (origen == "extranjero") 
    {
      contImportados++;
      acumPrecioImportados+=precio;
    }
    
    seguir = prompt("¿Desea agregar otra venta?: s/n").toLowerCase();
  } while (seguir != "n");

  if (contExtranjero != 0) { 
    promedioJueImportados = acumPrecioImportados / contImportados;
  }

  iva = totalPrecio * 0.21;

  if(contMuneca > contPelota && contMuneca > contRompecabezas){
    masVendido="Muñeca"; 
  }else if(contPelota >= contMuneca && contPelota >= contRompecabezas){
    masVendido="Pelota";
  }else{
    masVendido="Rompecabezas";
  }

  document.write("El tipo del juguete mas vendido es" + masVendido);
  document.write("El promedio de los juguetes Importados" + promedioJueImportados);
  document.write("La recaudacion total de todas las ventas son" + totalPrecio);
  document.write("El rompecabezas nacional mas barato, tiene un precio de" + precioMasBarNac);
  document.write("Se percibio de iva en total, de todas las ventas es" + iva);
  
}
