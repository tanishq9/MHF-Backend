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
//            /^[a-zA-Z]+$/.test(pan.val()
            console.log(pan.val().length);
            if(pan.val().length==10){
                let part1=pan.val().charAt(0)+pan.val().charAt(1)+pan.val().charAt(2)+pan.val().charAt(3)+pan.val().charAt(4);
                let part2=pan.val().charAt(5)+pan.val().charAt(6)+pan.val().charAt(7)+pan.val().charAt(8);
                let part3=pan.val().charAt(9);
                console.log(part1);
                console.log(part2);
                console.log(part3);
        
                if(/^[a-zA-Z]+$/.test(part1) && /^[a-zA-Z]+$/.test(part3) && $.isNumeric(part2)){
                    myFunction('Correct Details');
                    $.post(
                        '/report',
                        obj,
                        function(data){
                            console.log(data);
                            myFunction('Email Sent');
                        }
                    )
                }else{
                    console.log('Invalid PAN Card Number');  
                    myFunction('Invalid PAN Card Number'); 
                }
            }else{
                console.log('Invalid PAN Card Number');  
                myFunction('Invalid PAN Card Number'); 
            }
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