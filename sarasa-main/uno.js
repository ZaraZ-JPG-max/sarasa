/*Enunciado:
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:

a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/

function mostrar() 
{
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  let contadorReptil = 0;
  let contadorAve = 0;
  let contadorMamifero = 0;
  let tipoMasJoven;
  let sexoMasJoven;
  let promedioEdadReptil=0;   
  let acumEdadReptiles = 0;
  let contMascotas=0;
  let porcentajeAves=0;
  let masCantidad;
  let contMayorCantidad;
  let edadMasJoven=0;
  let flag = 1;

  do 
  {

    nombre = prompt("Ingrese nombre de mascota:").toLowerCase();
    while (nombre.length < 3 || nombre.length > 8) 
    {
      nombre = prompt("ERROR. Ingrese nombre del animal:").toLowerCase();
    }

    tipo = prompt("Ingrese tipo de mascota (Mamifero/Ave/Reptil):").toLowerCase();
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil") 
    {
      tipo = prompt("ERROR. Ingrese tipo de mascota (Mamifero/Ave/Reptil):").toLowerCase();
    }

    if(tipo == "reptil")
    {
      sangre = prompt("Ingrese sangre 'Fria':").toLowerCase();
      while (sangre != "fria")
      {
        sangre = prompt("ERROR. Ingrese sangre 'Fria':").toLowerCase();
      }
    }
    else
    {
      sangre = prompt("Ingrese sangre del animal (Fria/Calida):").toLowerCase();
      while (sangre != "fria" && sangre != "calida")
      {
        sangre = prompt("ERROR. Ingrese sangre del animal (Fria/Calida):").toLowerCase();
      }
    }


    edad = parseInt(prompt("Ingrese edad del animal:"));
    while (isNaN(edad) || edad <= 0) 
    {
      edad = parseInt(prompt("ERROR. Ingrese edad del animal:"));
    }

    sexo = prompt("Ingrese sexo del animal (H) para hembra o (M) para macho").toLowerCase();
    while (sexo != "m" && sexo != "h")
    {
      sexo = prompt("ERROR. Ingrese sexo del animal (H) para hembra o (M) para macho").toLowerCase();
    }

    switch(tipo)
    {
      case "mamifero":
        contadorMamifero++;
        break;

      case "reptil":
        contadorReptil++;
        acumEdadReptiles+=edad;
        break;

      case "ave":
        contadorAve++;
        break;
    }

    if(flag || edad < edadMasJoven){
      tipoMasJoven=tipo;
      sexoMasJoven=sexo;
      edadMasJoven = edad;
      flag=0; 
    }

    contMascotas++;


    seguir = prompt("Quiere ingresar otra persona (si/no): ");
		while(seguir != "si" && seguir != "no")
    {
			seguir = prompt("Error! Ingrese (si/no): ");
		}
	}while(seguir == "si");



  if(contadorReptil > contadorAve && contadorReptil > contadorMamifero)
  {
    masCantidad="Reptil";
    contMayorCantidad = contadorReptil;  

  }
  else if(contadorMamifero >= contadorReptil && contadorMamifero >= contadorAve)
  {
    masCantidad="Mamifero";
    contMayorCantidad = contadorMamifero;
  }
  else
  {
    masCantidad = "Ave";
    contMayorCantidad = contadorAve;
  }

  promedioEdadReptil = acumEdadReptiles / contadorReptil;

  porcentajeAves = contadorAve * 100 / contMascotas;

  document.write("Promedio de edad de los reptiles es: "+promedioEdadReptil+"<br>");  
  document.write("Tipo de la mascota mas joven es "+tipoMasJoven+" y el sexo es "+sexoMasJoven+"<br>");  
  document.write("Porcentaje de aves: "+porcentajeAves+"<br>");  
  document.write("El tipo de mascota con mas cantidad: "+masCantidad+"<br>");  



}
