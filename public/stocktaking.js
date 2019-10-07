$(document).ready(function(){
    
    console.log('Document loaded');
    
    var button=$('#reportbtn');
    var amount=$('#amt');
    var pan=$('#pannum');
    var email=$('#email');

    button.click(function(){
        console.log('Button clicked.');
        console.log(amount.val());
        console.log(pan.val());
        console.log(email.val());
        var obj={
            amt:amount.val(),
            pn:pan.val(),
            em:email.val()
        };
        if(amount.val()=='' || pan.val()=='' || email.val()==''){
            console.log('Empty Field(s)');
            myFunction('Empty Fields(s)');
        }else{
            myFunction('Email Send');
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

function myFunction(data) {
    var x = document.getElementById("snackbar");
    x.textContent = data
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}