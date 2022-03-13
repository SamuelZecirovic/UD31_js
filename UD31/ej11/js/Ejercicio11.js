function lanzar(){
var array = [];
var i;
for (i = 0; i < 36000; i++) {
    x = Math.floor(Math.random()*(5+1)+1);
    y = Math.floor(Math.random()*(5+1)+1);
    sumadados = x + y

    array.push(sumadados);
    
    //document.getElementById("x").innerHTML+=x +" ";
    //document.getElementById("y").innerHTML+= y +" ";
    
    }
    //document.getElementById("sumadados").innerHTML+= "["+array +"] ";
    console.log(array);
}

