var empetyRow ="<tr><td colspan='6' class='text-center'>No hay registros disponibles</td></tr>";

function alerta() {
  let respuesta = confirm("¿Desea eliminar este elemento?");
  return respuesta;
}

function createRow(num, cedula, nombre, apellido, edad) {
  var dynamicTr =
    `<tr id=${num} >` +`<th scope="row">` + num +`</th>` + `<td>` + cedula + `</td>` + `<td>` + nombre +
    `</td>` + `<td>` + apellido + `</td>` + `<td>` + edad + `</td>` + `<td style="text-align: center;"><button onClick="deleteRow(${num})" id=${num} class="btn btn-danger btn-sm" ><i class="fa-solid fa-trash"></i></button></td>` +
    `</tr>`;
    $("#tabla tbody").append(dynamicTr);
}

function cleanInputs() {
  $("#cedula").val("");
  $("#nombre").val(""); 
  $("#apellido").val("");
  $("#edad").val("");
}

function deleteRow(num) {
    const td=document.getElementById('tabla').getElementsByTagName('tr')
    if(alerta()) {
        for (let i = 0; i < td.length; i++) {
            if (td[i].id == num) {
                td[i].remove();
            }
        }
        if($("#tabla tbody").children().children().length == 0){
        $("#tabla tbody").append(empetyRow);
        }
    }
}

$(document).ready(function () {
   $("#tabla tbody").append(empetyRow);

  $("#añadir").click(function () {
    var cedula = $("#cedula").val().trim();
    var nombre = $("#nombre").val().trim();
    var apellido = $("#apellido").val().trim();
    var edad = $("#edad").val().trim();

    if (cedula != "" && nombre != "" && apellido != "" && edad != "") {

      if ($("#tabla tbody").children().children().length == 1) {
        $("#tabla tbody").html("");
      }
      let num = $("#tabla tbody").children().length + 1;
      createRow(num, cedula, nombre, apellido, edad);
      cleanInputs();
    } else {
      alert("Complete todos los campos");
    }
  });
});
