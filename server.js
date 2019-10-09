const express = require('express');
const cors = require('cors');
var rn = require('random-number');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mlhomefriend@gmail.com',
        pass: 'mlhome99'
    }
});

const app = express();

// Middleware to post data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/',express.static(__dirname+'/public'));

app.post('/report',function(req,res){
    var amount=req.body.amt;
    var pan_num=req.body.pn;
    var email=req.body.em;
    console.log(amount);
    console.log(pan_num);
    var gen = rn.generator({
        min:  20
      , max:  70
      , integer: true
    });
    pan_num=gen();
    if(amount>=9000000){
        amount=30;
    }
    else if(amount<=2000000){
        amount=0;
    }else{
        amount=(amount-1000000)*30;
        amount=amount/8000000;
    }
    
    console.log(pan_num);
    console.log(amount);
    
    var total_score=pan_num+amount;
    
    if(total_score>=75){
        var mailOptions = {
            from: 'mlhomefriend@gmail.com',
            to: email,
            subject: 'ML Home Friend Report',
            text: '',
            html:`<p>Greetings Ram,&nbsp;</p>
            <p>Your credit score is ${total_score}.</p>
            <p>Our suggestions :</p>
            <p>1. <a href="https://www.mahindralifespaces.com/real-estate-properties/chennai-property/happinest-avadi">Happinest, Avadi</a>&nbsp;</p>
            <p>2. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/aura-near-dwarka-expressway">Aura, Gurgaon </a></p>
            <p>3. <a href="https://www.mahindraworldcity.com/chennai_portfolio/iris-court/"> Iris Court, Chennai</a></p>
            <p>4. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/luminare-golf-course-extension-road"> Luminare, Gurgaon </a></p>
            <p>5. <a href="https://www.mahindralifespaces.com/real-estate-properties/hyderabad-property/ashvita-kukatpally"> Ashvita, Hyderabad</a></p>
            <p>6. <a href="https://www.mahindralifespaces.com/real-estate-properties/pune-property/antheia-pimpri"> Antheia, Pune</a></p>
            <p>Regards,<br />Mahindra Lifespaces</p>`
        };
    }
    else if(total_score>=50 && total_score<75){
        var mailOptions = {
            from: 'mlhomefriend@gmail.com',
            to: email,
            subject: 'ML Home Friend Report',
            text: '',
            html:`<p>Greetings Ram,&nbsp;</p>
            <p>Your credit score is ${total_score}.</p>
            <p>Our suggestions :</p>
            <p>1. <a href="https://www.mahindralifespaces.com/real-estate-properties/chennai-property/happinest-avadi">Happinest, Avadi</a>&nbsp;</p>
            <p>2. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/aura-near-dwarka-expressway">Aura, Gurgaon </a></p>
            <p>3. <a href="https://www.mahindraworldcity.com/chennai_portfolio/iris-court/"> Iris Court, Chennai</a></p>
            <p>4. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/luminare-golf-course-extension-road"> Luminare, Gurgaon </a></p>
            <p>5. <a href="https://www.mahindralifespaces.com/real-estate-properties/hyderabad-property/ashvita-kukatpally"> Ashvita, Hyderabad</a></p>
            <p>Regards,<br />Mahindra Lifespaces</p>`
        };
    }else if(total_score<50 && total_score>=25){
        var mailOptions = {
            from: 'mlhomefriend@gmail.com',
            to: email,
            subject: 'ML Home Friend Report',
            text: '',
            html:`<p>Greetings Ram,&nbsp;</p>
            <p>Your credit score is ${total_score}.</p>
            <p>Our suggestions :</p>
            <p>1. <a href="https://www.mahindralifespaces.com/real-estate-properties/chennai-property/happinest-avadi">Happinest, Avadi</a>&nbsp;</p>
            <p>2. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/aura-near-dwarka-expressway">Aura, Gurgaon </a></p>
            <p>3. <a href="https://www.mahindraworldcity.com/chennai_portfolio/iris-court/"> Iris Court, Chennai</a></p>
            <p>4. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/luminare-golf-course-extension-road"> Luminare, Gurgaon </a></p>
            <p>Regards,<br />Mahindra Lifespaces</p>`
        };
    }else{
        var mailOptions = {
            from: 'mlhomefriend@gmail.com',
            to: email,
            subject: 'ML Home Friend Report',
            text: '',
            html:`<p>Greetings Ram,&nbsp;</p>
            <p>Your credit score is ${total_score}.</p>
            <p>Our suggestions :</p>
            <p>1. <a href="https://www.mahindralifespaces.com/real-estate-properties/chennai-property/happinest-avadi">Happinest, Avadi</a>&nbsp;</p>
            <p>2. <a href="https://www.mahindralifespaces.com/real-estate-properties/gurgaon-property/aura-near-dwarka-expressway">Aura, Gurgaon </a></p>
            <p>3. <a href="https://www.mahindraworldcity.com/chennai_portfolio/iris-court/"> Iris Court, Chennai</a></p>
            <p>Regards,<br />Mahindra Lifespaces</p>`
        };
    }

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        res.send(error);
    } else {
        res.send('Email sent: ' + info.response);
    }
    });
    
});

app.listen(process.env.PORT || 4444,function(){
    console.log('Server started.');
});





