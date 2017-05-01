$("button").click(function(){
    $.getJSON("json.json", function(data){
        $.each(data, function(key, value){
            $("ul").append("<li>"+value.name+"</li> ");
            $("ul").append("<li>"+value.school+"</li>");
        });
    });
});