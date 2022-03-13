var imagen = "";
$(".selection").click(function(){
    imagen = $(this).find("img").attr('src');
    $("#grande").attr("src", imagen);
})