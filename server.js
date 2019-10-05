const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to post data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/',express.static(__dirname+'/public'));

app.listen(process.env.PORT || 4444,function(){
    console.log('Server started.');
});





