var estudiantes = [];

function obtenerListaEstudiantes(estudiantes) {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante(nombre,puntosTecnicos,puntosHse) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    for (var i = 0; i < 1; i++) {
      var nombre = prompt("Ingresa el nombre de la estudiante");
      var puntosTecnicos = prompt("Puntaje Tecnico");
      var puntosHse = prompt("Puntaje HSE");
      var estudiante = {};
      estudiante.nombre = nombre;
      estudiante.puntosTecnicos = puntosTecnicos;
      estudiante.puntosHse = puntosHse;
      estudiantes.push(estudiante);
      /*var agregarNuevo = estudiantes.nombre;
      var agragarNuevo1 = estudiantes.puntosTecnicos;
      var agragarNuevo2 = estudiantes.puntosHse;*/
      return estudiantes;
    }
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante[0].nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante[0].puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante[0].puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var lista = mostrar(estudiantes[0]);
    return lista;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var nombre = prompt("Que nombre deseas buscar?");
    filter([estudiantes], nombre)
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    filter([estudiantes],estudiantes.puntosTecnicos)
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    filter([estudiantes],estudiantes.puntosHse)
}
