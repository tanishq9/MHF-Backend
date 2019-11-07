$(document).ready(function(){
    $("#data").hide();
    console.log("Document Loaded.")
    $("#showbtn").click(function(){
        var val1=$( "#sloc option:selected" ).val();
        var val2=$( "#splot option:selected" ).val();
        var val3=$( "#stype option:selected" ).val();
        var val4=$( "#sbhk option:selected" ).val();
        
        console.log(val1);
        console.log(val2);
        console.log(val3);
        console.log(val4);

        
        if(val1==1 && val2==1 && val3==1 && val4==1){
            if($("#data").is(":visible")){
                $("#data").hide();
                console.log("Visible");
            }else{
                $("#data").show();
                console.log("Invisible");
            }
        }else{
            $("#data").hide();
            myFunction("Select the Fields")     
        }
    })

});


function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.textContent = text
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}   