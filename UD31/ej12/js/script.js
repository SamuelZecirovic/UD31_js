window.onload = function(){
    document.getElementById("comprobar").onclick = function(){
        const pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
        var fecha = document.getElementById("date").value; 
        if (pattern.test(fecha)) {
            alert("fecha valida");
        } else {
            alert("fecha no valida");
        }
    
    } 
    document.getElementById("comprobar2").onclick = function(){ 
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        var mail = document.getElementById("email").value;
        if (pattern.test(mail)) {
            alert("email valido");
        } else {
            alert("email no valido");
        }
    }

    document.getElementById("comprobar3").onclick = function(){
        const pattern = /^[A-z]+\s[A-z]+$/;
        var nombre = document.getElementById("nombre").value;
        if (pattern.test(nombre)) {
            var nombreSplit = nombre.split(" ").reverse().join();
            alert(nombreSplit);
        } else {
            alert("nombre no valido");
        }
    } 
    document.getElementById("comprobar4").onclick = function(){
        str = document.getElementById("html").value;
        alert(str.replace( /<[^>]+>/g, ''));
    }

}