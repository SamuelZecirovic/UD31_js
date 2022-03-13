$(".put").click(function(){
    if($("#operacion").text() == 0){
        $("#operacion").text($(this).text());
    }else{
        $("#operacion").text($("#operacion").text()+$(this).text());
    }
    calcular($("#operacion").text().split(" "));
});

$(".putop").click(function(){

    $("#operacion").text($("#operacion").text()+" " + $(this).text() + " ");
    
});

$(".C").click(function(){
    $("#operacion").text("0");
});

$(".quitar").click(function(){

    var valor = $("#operacion").text();
    if(valor.length > 1){
        operacion = valor.substr(0, valor.length -1);
        $("#operacion").text(operacion);
    }else{
        $("#operacion").text("0");
    }

    calcular($("#operacion").text().split(" "));
});

function calcular(n){

        switch (n[1]){
            case "+":
                result = parseFloat(n[0]) + parseFloat(n[2]);
                $("#result").text(result);

                if (n.length > 3){
                    n.shift();
                    n.shift();
                    n[0] = result;
                    calcular(n)
                }
            break;

            case "-":
                result = parseFloat(n[0]) - parseFloat(n[2]);
                $("#result").text(result);
                if (n.length > 3){
                    n.shift();
                    n.shift();
                    n[0] = result;
                    calcular(n)
                }
            break;

            case "x":
                result = parseFloat(n[0]) * parseFloat(n[2]);
                $("#result").text(result);
                if (n.length > 3){
                    n.shift();
                    n.shift();
                    n[0] = result;
                    calcular(n)
                }
            break;

            case "/":
                result = parseFloat(n[0]) / parseFloat(n[2]);
                $("#result").text(result);
                if (n.length > 3){
                    n.shift();
                    n.shift();
                    n[0] = result;
                    calcular(n)
                }
            break;

            default:
            break;
        }
    

}


$("#igual").click(function(){
    $("#operacion").text($("#result").text());
})