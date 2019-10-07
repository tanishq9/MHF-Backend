$(document).ready(function(){
    
    console.log('Document loaded');
    
    var button=$('#reportbtn');
    var amount=$('#amt');
    var pan=$('#pannum');


    button.click(function(){
        console.log('Button clicked.');
        console.log(amount.val());
        console.log(pan.val());
        var obj={
            amt:amount.val(),
            pn:pan.val()
        };
        if(amount.val()=='' || pan.val()==''){
            console.log('Empty Field(s)');
            myFunction();
        }else{
            $.post(
                '/report',
                obj,
                function(data){
                    console.log('Email send.');
                }
            )
        }
    });
    AOS.init({
        easing: 'ease', 
        duration: 1800,
        once: true /* animation only happens once when the page is loaded*/
    });

});

function myFunction() {
    var x = document.getElementById("snackbar");
    x.textContent = "Empty Field(s)"
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}