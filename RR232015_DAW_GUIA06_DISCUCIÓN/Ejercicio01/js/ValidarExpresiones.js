function iniciar() {
    var boton = document.getElementById("validar");
    if (boton.addEventListener) {
       boton.addEventListener("click", validar, false);
    } else if (boton.attachEvent) {
       boton.attachEvent("onclick", validar);
    }
 }
 
 function validar() {
    var tipo = document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
    var dato = document.frmdatos.txtdato.value;
    var valido = false;
    var re = null;

    if (dato == null || dato == "" || dato.length == 0) {
       alert("No se ha ingresado ningún valor en el campo de formulario");
       return 0;
    }

    switch (tipo) {
       case "ipv4":
          re = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
          if (re.test(dato)) {
             valido = true;
          }
          break;
       case "DireccionWeb":
          re = /^(https?:\/\/|ftp:\/\/|\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
          if (re.test(dato)) {
             valido = true
          }
          break;
       case "correo":
          re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (re.test(dato)) {
             valido = true;
          }
          break;
       default:
          alert("El tipo de dato seleccionado no puede ser procesado");
          break;
    }
    if (valido == true) {
       alert("El valor " + dato + " de " + tipo + " ingresado es válido");
    } else if (valido == false) {
       alert("El valor " + dato + " de " + tipo + " ingresado es inválido");
    }
 }
 
 if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
 }