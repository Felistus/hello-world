$(document).ready(() => {

    $("#btn").click(() => {
       let inputText = $("#taskField").val();
        if (inputText === "") {

        } else {
            $("#unorderedList").append( `<div class="item"> 
                                         <li>
                                            <input type="checkbox" name="check" class="checkbox"> 
                                            <label for="check"> ${ inputText } </label>
                                        </li> 
                                        <i class="fa fa-times delete"></i>
                                    </div> `);
                                   $("#taskField").val("");
        }
    }); 

    $("#unorderedList").on("click", ".checkbox", function() {
        $(this).parent().toggleClass("strike");
    });

    $("#unorderedList").on("click", ".delete", function() {
        $(this).parent().remove();
    });

    $(".circle-1").click( ()=> {
       $(".item").remove();
    });
    
});



