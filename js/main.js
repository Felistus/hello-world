$(document).ready(() => {

// Using the Submit button to submit the input text
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
// Using the KeyBoard ENTER key to submit the input text
    $("#taskField").keypress( (event) => {
        if (event.keyCode === 13) {
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
        }
    });

    $("#unorderedList").on("click", ".checkbox", function() {
        $(this).parent().toggleClass("strike");
    });

    $("#unorderedList").on("click", ".delete", function() {
        $(this).parent().remove();
    });


    
});



