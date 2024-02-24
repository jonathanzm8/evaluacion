let estudiantes= [
    {nombre: "edwimn", apellido:"erazo", nota1: 8.5, nota2:9.5, nota3: 8.7, total: 26.6, promedio: 8.7},
    {nombre: "maritza", apellido:"rosero", nota1: 5.4 ,nota2:8.5, nota3: 9.7, total: 23.6, promedio: 9.7},
    {nombre: "esteban", apellido:"guaranda", nota1: 9.4 ,nota2:10.0, nota3: 9.0, total: 28.4, promedio: 9.0},
    {nombre: "ricaedo", apellido:"batista", nota1: 6.4 ,nota2:9.5, nota3: 8.9, total: 28.4, promedio: 8.9},
]



calculartTotal= function(n1, n2, n3){

    let suma

    suma= n1 + n2 + n3;

    return suma;

}

calcularPromedio= function(p1, p2, p3){

    let  promedio

    promedio= (p1 + p2 + p3)/ 3

    return promedio;

}


calcular= function(){

    let  nota1, nota2, nota3, calcular, promedio

    nota1= recuperarFloat("txtNota1");
    nota2= recuperarFloat("txtNota2");
    nota3= recuperarFloat("txtNota3");

    calcular= calculartTotal(nota1, nota2, nota3);

    mostrarTexto("lbltotal", calcular);

    promedio=calcularPromedio(nota1,nota2, nota3);

    mostrarTexto("lblpromedio", promedio);

    habilitarComponente("btnGuadar")


}


guardar = function () {
  let nota1, nota2, nota3, calcular, promedio, nombre, apellido;

  nombre = recuperarTexto("txtNombre");
  apellido = recuperarTexto("txtApellido");
  nota1 = recuperarFloat("txtNota1");
  nota2 = recuperarFloat("txtNota2");
  nota3 = recuperarFloat("txtNota3");

  promedio = calcularPromedio(nota1, nota2, nota3);
  calcular = calculartTotal(nota1, nota2, nota3);

  if (valiadarNombre("lblError1", nombre)) {
    let estudiante = [];

    estudiante.nombre = nombre;
    estudiante.apellido = apellido;
    estudiante.nota1 = nota1;
    estudiante.nota2 = nota2;
    estudiante.nota3 = nota3;
    estudiante.total = calcular;
    estudiante.promedio = promedio;

    estudiantes.push(estudiante);

    alert("guardado correctamente");

    mostraTabla();
    // deshabilitarComponente("btnGuadar");
  }
};

mostraTabla = function () {
  let cmpTable, contenidoTabla, element;

  // mostrarComponente("divResumen");

  cmpTable = document.getElementById("tablaResumen");

  contenidoTabla =
    "<table><tr>" +
    "<th>NOMBRE</th>" +
    "<th>APELLIDO</th>" +
    "<th>NOTA1</th>" +
    "<th>NOTA2</th>" +
    "<th>NOTA3</th>" +
    "<th>TOTAL</th>" +
    "<th>PROMEDIO</th>" +
    "</tr>";

  for (let i = 0; i < estudiantes.length; i++) {
    element = estudiantes[i];
    contenidoTabla +=
      "<tr>" +
      "<td>" +
      element.nombre +
      "</td>" +
      "<td>" +
      element.apellido +
      "</td>" +
      "<td>" +
      element.nota1 +
      "</td>" +
      "<td>" +
      element.nota2 +
      "</td>" +
      "<td>" +
      element.nota3 +
      "</td>" +
      "<td>" +
      element.total +
      "</td>" +
      "<td>" +
      element.promedio +
      "</td>" +
      "</tr>";

    contenidoTabla += "</table>";

    cmpTable.innerHTML = contenidoTabla;
  }
};

valiadarNombre = function (componente, campo) {
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