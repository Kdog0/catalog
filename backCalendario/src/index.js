const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

require('./controllers/authControllers')(app);


app.listen(3002, ()=>{
    console.log("Rodou, otário!");
});
