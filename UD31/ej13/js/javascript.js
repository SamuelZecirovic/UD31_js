var x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  var x = $("#text");
  x.click(presionParrafoDocumento);
  x = $("#tabla1 p");
  x.click(presionParrafoPrimeraTabla);
  x = $("#tabla2 p");
  x.click(presionParrafoSegundaTabla);
}

function presionParrafoDocumento() {
  alert("Se presionó un párrafo del documento");
}
function presionParrafoPrimeraTabla() {
    alert("Se presionó un párrafo contenido en la primera tabla.");
  }
function presionParrafoSegundaTabla() {
  alert("Se presionó un párrafo contenido en la segunda tabla.");
}