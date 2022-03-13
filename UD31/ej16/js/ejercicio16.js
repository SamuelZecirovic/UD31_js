function reloj() {
    var fecha = new Date();
    horas = fecha.getHours();
    minutos = fecha.getMinutes(); 
    segundos = fecha.getSeconds(); 

    str_segundos = new String (segundos);
    if (str_segundos.length == 1) {
        segundos = "0" + segundos;
    }

    str_minutos = new String (minutos);
    if (str_minutos.length == 1) {
        minutos = "0" + minutos;
    }

    str_horas = new String (horas);
    if (str_horas.length == 1) {
        horas = "0" + horas;
    }

    horaImprimible = horas + " : " + minutos + " : " + segundos;
    document.relojFuncional.relojAuto.value = horaImprimible;
    setTimeout("reloj()",1000);
}