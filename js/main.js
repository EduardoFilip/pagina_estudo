$(function(){

    $(".place").each(function(){ /*o EACH diz que ele vai virar
    CADA campo que tenha a CLASE .PLACE e executar a funcao abaixo */
        var place = $(this).attr("title"); /*a variavel place, recebe o
        atributo TITLE do elemento que contem a classe .PLACE, pega isto
        atraves do THIS (este)*/
        var input = $(this);
    
    /*Abaixo como colocar o TITLE dentro do INPUT. Colocando o
    INPUT recebe o VALor (PLACE)*/
        
            input.val(place);
            input.css("color","#ccc");
            input.focusin(function(){
                input.css("color","black");
                if (input.val() == place) { /*se o valor do input
                    for igual ao valor do place, ele vai limpar*/
                    input.val(''); /* Zerou o velor*/
                }
            }).focusout(function(){
                if(input.val() == "") { /*se o valor do campo
                    for vazio*/
                    input.css("color","#ccc"); /*coloca a cor ccc no inpu*/
                    input.val(place); /* coloca o valor do title novamente*/
                }
            })
    
    });
    
    
    
    
    
    
    
    
    });