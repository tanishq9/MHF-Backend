$(document).ready(function(){
    console.log("Document Loaded.")
    $("#showbtn").click(function(){
        var val1=$( "#sloc option:selected" ).val();
        var val2=$( "#splot option:selected" ).val();
        
        console.log(val1);
        console.log(val2);
        
        if(val1==1 && val2==1){
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

    $("#reqprev").click(function(){
        console.log("Button clicked.");
        let img1=$("#blah1");
        let img2=$("#blah2");
        let img3=$("#blah3");
        let ip="images/tick.png"
        if(img1.attr('src')==ip && img2.attr('src')==ip && img3.attr('src')==ip){
            myFunction('Preview Requested')
        }else{
            myFunction('Upload all documents')
        }
    });


});


function myFunction(text) {
    var x = document.getElementById("snackbar");
    x.textContent = text
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}   