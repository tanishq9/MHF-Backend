const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to post data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/',express.static(__dirname+'/public'));

app.get("/pics",(req,res)=>{
    data = {
        "0":"https://i.ibb.co/yPM1B8H/pic1.jpg",
        "1":"https://i.ibb.co/hRDHnnZ/pic2.jpg",
        "2":"https://i.ibb.co/7gCFX21/pic3.jpg",
        "3":"https://i.ibb.co/dLCxMCr/pic4.jpg"
    }
    res.send(data);
})

app.listen(process.env.PORT || 4444,function(){
    console.log('Server started.');
});





