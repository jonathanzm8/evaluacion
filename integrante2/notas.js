let estudiantes = [
    {nombre : "Edwin",
    apellido: "Erazo",
    nota1: 8.4,
    nota2: 9.5,
    nota3: 8.7,
    total:26.6,
    promedio:8.7
},
{nombre : "Maritza",
apellido:"Rosero",
nota1:5.4,
nota2:8.5,
nota3:9.7,
total:23.6,
promedio:9.7},
{nombre : "Estebam",
apellido: "Guaranda",
nota1:9.4,
nota2:10.0,
nota3:9.0,
total:28.4,
promedio: 9.0},
{nombre : "Ricardo",
 apellido:"Batista",
nota1:6.4,
nota2:9.5,
nota3:8.9,
total:24.8,
promedio:8.9}
];

/**
 * En notas.js agregar una función calcularPromedio que recibe 3 parámetros llamados
    p1,p2 y p3 y retorna el promedio de los 3 parámetros.
 */
calcularPromedio = function (p1, p2, p3) {
    let promedio;
    promedio = (p1 + p2+ p3) / 3;
    return promedio;
}
/**calcularTotal que recibe 3 parámetros llamados
n1,n2 y n3 y retorna la suma de los 3 parámetros
*/
calcularTotal = function (n1, n2, n3) {
    let total;
    total = (n1 + n2 + n3);
    return total.toFixed(2);
}

calcular = function (){
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultaPromedio;
    nota1 = recuperarFloat("txtNota1");
    nota2 = recuperarFloat("txtNota2");
    nota3 = recuperarFloat("txtNota3");
    resultado = calcularTotal(nota1,nota2,nota3)
    resultaPromedio = calcularPromedio(nota1,nota2,nota3)
    mostrarTexto("lblResultadoTotal", resultado);
    mostrarTexto("lblResultadoPromedio", resultaPromedio.toFixed(2));
    habilitarComponente("btnGuardar");

}

guardar = function () {
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let nota1 = recuperarFloat("txtNota1");
  let nota2 = recuperarFloat("txtNota2");
  let nota3 = recuperarFloat("txtNota3");
  let nuevoEstudiante = {};

  if (valiadarNombreApellidos(apellido, "lblError2")) {
    nuevoEstudiante.nombre = nombre;
    nuevoEstudiante.apellido = apellido;
    nuevoEstudiante.nota1 = nota1;
    nuevoEstudiante.nota2 = nota2;
    nuevoEstudiante.nota3 = nota3;
    nuevoEstudiante.total = calcularTotal(nota1, nota2, nota3);
    nuevoEstudiante.promedio = calcularPromedio(nota1, nota2, nota3).toFixed(2);
    //Validacion de campos vacios
    agregarEstudiante(nuevoEstudiante);
    limpiarCampo();
  }
};

agregarEstudiante = function (estudiante) {
  estudiantes.push(estudiante);
  mostrarEstudiantes();
  alert(
    "SE GUARDO CORRECTAMENTE EL ESTUDIANTE: " +
      estudiante.nombre +
      " " +
      estudiante.apellido
  );
};

mostrarEstudiantes = function () {
  deshabilitarComponente("btnGuardar");

  let cmpTabla = document.getElementById("tablaEstudiantes");
  let contenidoTabla =
    "<table class='miTabla'><tr>" +
    "<th>Nombre</th>" +
    "<th>Apellido</th>" +
    "<th>Nota 1</th>" +
    "<th>Nota 2</th>" +
    "<th>Nota 3</th>" +
    "<th>Total</th>" +
    "<th>Promedio</th>" +
    "</tr>";
  let estudiante;
  for (let index = 0; index < estudiantes.length; index++) {
    estudiante = estudiantes[index];
    contenidoTabla +=
      "<tr>" +
      "<td>" +
      estudiante.nombre +
      "</td>" +
      "<td>" +
      estudiante.apellido +
      "</td>" +
      "<td>" +
      estudiante.nota1 +
      "</td>" +
      "<td>" +
      estudiante.nota2 +
      "</td>" +
      "<td>" +
      estudiante.nota3 +
      "</td>" +
      "<td>" +
      estudiante.total +
      "</td>" +
      "<td>" +
      estudiante.promedio +
      "</td>" +
      "</tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};

limpiarCampo = function () {
  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtNota1", "");
  mostrarTextoEnCaja("txtNota2", "");
  mostrarTextoEnCaja("txtNota3", "");
  mostrarTexto("lblResultadoTotal", 0.0);
  mostrarTexto("lblResultadoPromedio", 0.0);
  deshabilitarComponente("btnGuardar");
};

//validacion
valiadarNombreApellidos = function (campo, componente) {
  if (campo == "") {
    mostrarTexto(componente, "*CAMPO OBLIGATORIO");
    return false;
  }

  if (campo.length >= 3) {
    for (let i = 0; i < campo.length; i++) {
      let element = campo[i];

      if (!esMayuscula(element)) {
        mostrarTexto(componente, "Solo pueden contener letras mayusculas.");

        return false;
      }
    }
  } else {
    mostrarTexto(componente, "Deben tener al menos 3 caracteres.");
    return false;
  }
  mostrarTexto(componente, "");

  return true;
};

esMayuscula = function (caracter) {
  let code = caracter.charCodeAt();

  // Rango de códigos ASCII correspondiente a las letras mayúsculas A-Z
  if (code >= 65 && code <= 90) {
    return true;
  } else {
    return false;
  }
};