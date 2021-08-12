//              creating server 


//                   importing the required modules 

const express = require('express');     
const app = express();

// importing path module 

const path = require('path');
const session = require('express-session');
const {v4: uuidv4} = require('uuid');
const bodyparser = require('body-parser');
const router = require("./router");

// const router = require('router');

const port = process.env.PORT || 2000;

//middlewares 

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


//      set template engine 

app.set('view engine','ejs');

// load static files
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}));

app.use('/route', router);

//home route

app.get('/' , (req , res)=>{

  res.render("base",{title: "Login System in Express"});

});



app.listen(port, () => {
        console.log("Server listening on port : ",port);
});