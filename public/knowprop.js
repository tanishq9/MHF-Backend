$(document).ready(function(){
    $("#showbtn").click(function(){
        var val=$( "#selector option:selected" ).val();
        console.log(val);
        if(val==0){
            $("#data").hide();
            myFunction("Select the Property")
        }else if(val==1){
            if($("#data").is(":visible")){
                $("#data").hide();
                console.log("Visible");
            }else{
                $("#data").show();
                console.log("Invisible");
            }
        }
    })
});


function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.textContent = text
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}   