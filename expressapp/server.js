// importing  express framework

const express = require("express");
const app = express();

// app.get('/server' , (req , res)=>{

//    res.send('Node express application');

// });

// let port = 2000;
// app.listen(port, () => {
//     console.log(" server started on : ",port );
// });


// const myLogger = function(req, res, next){
  
//     console.log("LOGGED ");
//     next();
// };

// const requestTime = function(req,res,next){
//     req.reqTime = Date.now();
//     console.log("Current time : ", req.reqTime);
//     next();
// };


// app.use(myLogger);
// app.use(requestTime);

// app.get('/', (req,res) => {
//     res.send(`Home Route And Current time is : ${req.reqTime}`);
// });


// app.listen(2000, () => {
//     console.log("App started on 2000 ");
// })


//                  Serving static files  in express  

// const path = require('path');

// const publicpath = path.resolve(__dirname, "public");

// app.use(express.static(publicpath));

// app.get('/' , (req , res)=>{

//    res.send('hello from simple server :)')

// });

// app.listen(2000, () => console.log("App started on port 2000"));


// routing with express 
// const path = require("path");
// const PORT = 2000;
// const publicpath = path.resolve(__dirname, "public");

// const data = {
//     id: 1,
//     name: "India"
// };

// app.get('/' , (req , res)=>{
//    res.end("welcome to my home page");
// });

// app.get('/about' , (req , res)=>{
//     res.end("welcome to my About page");
//  });

//  app.get('/contact' , (req , res)=>{
//     res.sendFile(`${publicpath}/img/npm.png`);
//  });
 
// app.listen(PORT, () => console.log("Listening on port : ",PORT));


//       viewsa in express 

// const PORT = 2000;

// app.set("view engine", "pug");

// app.get('/' , (req , res)=>{

//    res.render("index", {title: "Hello from express", h1: "Heading from express", p: "Paragraph from express "});

// })

// app.listen(PORT, () => console.log("App started on :",PORT));



//               Core express concepts  


/*                                       Advance topics 


                                            session 
                                            cookies 
                                            core middleware 
                                            core routing 
                                            Build own apis 
                                            core views 
                                            Database integration 
 */


                                            
//                              Exopress Form 

// const path = require("path");
// const PORT = process.env.PORT || 2000;


// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

// app.use(express.urlencoded({
//     extended: true
// }));

// app.get('/' , (req , res)=>{

//    res.render("index", {title: "Form Handling"});

// });



// app.post('/form_submit' , (req , res)=>{

//     const username = req.body.username;
//     const email = req.body.email;



//    res.send(` Your name is : ${username} and Your Email is : ${email}`);

// })

// app.listen(PORT, () => console.log("LIstening on port : ",PORT));


//           Session handling  in express 

// const session = require("express-session");
// const PORT  = process.env.PORT || 2000; 



// app.use(session({
//     secret: "Your Secret Key",
//     resave: true,
//     saveUninitialized: true 
// }));

// app.get('/' , (req , res)=>{
// req.session.name = " John";
// return res.send("session stared");

// });

// app.get('/session' , (req , res)=>{
// let name = req.session.name;
// return res.send(name);

// });

// app.get('/destroy' , (req , res)=>{

//     req.session.destroy(function(err){
//         console.log("Seesion destroyed !");
//     });

//     res.end();
// });

// app.listen(PORT, () => {
//     console.log("Listening on Port : ",PORT);
// });


//          cookies 

const cookies = require("cookie-parser");

const PORT = process.env.PORT || 2000;

app.use(cookies());

let users = {
    name: "Atul Sharma",
    age: 20,
    passion:" body Building"
};


app.get('/' , (req , res)=>{

   res.send('simple Cookies here');

});

app.get('/setuser' , (req , res)=>{
 
    res.cookie("userData", users);
    res.send("User Data added to cookies...");
});

app.get('/getuser' , (req , res)=>{

    res.send(req.cookies);

});

app.get('/logout' , (req , res)=>{

    res.clearCookie("userData");
    res.send(" cookies destroyed");

})


app.listen(PORT, () => {
    console.log("App started on port: ",PORT);
});