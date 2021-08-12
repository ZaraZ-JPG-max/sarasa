/*Enunciado:
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

function mostrar() 
{
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;
  let contQuimica = 0;
  let contSistemas = 0;
  let contFisica = 0;
  let nombreMejorFisica;
  let notaMejorFisica = 0;
  let flagMejorFisica = 1;
  let nombreAlumnaJoven;
  let edadAlumJoven = 0;
  let flagAlumJoven = 1;
  let porcentajeQuimica = 0;
  let porcentajeFisica = 0;
  let porcentajeSistemas = 0;
  let edadMaxMaterias = 0;
  let nombreMaxMaterias;
  let cantMaxMaterias = 0;
  let flagMaxMaterias = 1;


  for(let i = 0; i < 500; i++)
  {
    nombre = prompt("Ingrese nombre: ");
      while (nombre.length == 0) 
      {
        nombre = prompt("Error, Reingrese nombre");
      }
    carrera = prompt("Ingrese la carrera (quimica/fisica/sistemas):").toLowerCase();
      while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") 
      {
        carrera = prompt("Error, Reingrese la carrera (quimica/fisica/sistemas):").toLowerCase();
      }
    sexo = prompt("Ingrese sexo (m = masculino, f = femenino, nb = no binario): ").toLowerCase();
    while (sexo != "m" && sexo != "f" && sexo != "nb" ) 
    {
      sexo = prompt("Error, Reingrese sexo (m = masculino, f = femenino, nb = no binario): ").toLowerCase();
    }
    cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias entre 1 y 5: "));
    while (!(cantidadMaterias >=1 && cantidadMaterias <= 5)) 
    {
      cantidadMaterias = parseInt(prompt("Error, Reingrese la cantidad de materias entre 1 y 5: "));
    }
    notaPromedio = parseInt(prompt("Ingrese su nota (entre 0 y 10):"));
    while (!(notaPromedio >=0 && notaPromedio <=10)) 
    {
       notaPromedio = parseInt(prompt("Error, Reingrese su nota (entre 0 y 10):"));
    }
    edad = parseInt(prompt("Ingrese su edad: "));
    while (!(edad >= 0)) 
    {
      edad = parseInt(prompt("Error, Reingrese su edad: "));
    }
      switch(carrera)
      {
        case "fisica":
          contFisica++;

            if (flagMejorFisica || notaPromedio > notaMejorFisica) 
            {
              notaMejorFisica = notaPromedio;
              nombreMejorFisica = nombre;
              flagMejorFisica = 0;
            }
        break;

        case "quimica":
          contQuimica++;
        break;

        case "sistemas":
          contSistemas++;
        break;

      }

      if (sexo == "f" && (flagAlumJoven || edad < edadAlumJoven)) 
      {
        edadAlumJoven = edad;
        nombreAlumnaJoven = nombreAlumnaJoven;
        flagAlumJoven = 0;
      }
      if (flagMaxMaterias || (cantidadMaterias > cantMaxMaterias && carrera == "fisica" && carrera == "sistemas")) {
        cantMaxMaterias = cantidadMaterias;
        edadMaxMaterias = edad;
        nombreMaxMaterias = nombre;
        flagMaxMaterias = 0;
      }

  }


  if(contQuimica != 0)
  {
    porcentajeQuimica = contQuimica * 0.2;
  }
  if(contFisica != 0){
    porcentajeFisica = contFisica * 0.2;
  } 
  if(contSistemas != 0){
    porcentajeSistemas = contSistemas * 0.2;
  } 

  document.write("El nombre del mejor promedio que estudia Fisica es " + nombreMejorFisica + "y su nota es" + notaMejorFisica + "<br>");
  document.write("El nombre de la alumna mas joven es " + nombreAlumnaJoven + " y tiene " + edadAlumJoven + "<br>");
  document.write("El porcentanje de alumnos que estudian Quimica es " + porcentajeQuimica + "<br>");
  document.write("El porcentanje de alumnos que estudian Fisica es " + porcentajeFisica + "<br>");
  document.write("El porcentanje de alumnos que estudian Sistemas es " + porcentajeSistemas + "<br>");
  document.write("La edad de la persona que cursa mas materias excepto Quimica es " + edadMaxMaterias + "y su nombre" + nombreMaxMaterias + ", ademas estudia " + cantMaxMaterias + "materias en la UTN");
  
}
