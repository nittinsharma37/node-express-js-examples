var express = require('express');
var router = express.Router();


const creds = {
    email: "admin@gmail.com",
    password: "admin"
};


//login user 

router.post("/login", (req,res) => {

    if(req.body.email == creds.email && req.body.password == creds.password) {
        req.session.user = req.body.email;
        res.redirect("/route/dashboard");
        // res.end("Login successful !");
    } else{
        res.end("invalid user");
    }
});

// route for dashboard 

router.get("/dashboard", (req,res) => {
    if(req.session.user){
        res.render("dashboard", {user: req.session.user});
    }else{
        res.send("unauhtorised user");
    }
});


// route for logout 

router.get("/logout", (req,res) => {
    req.session.destroy(function(err){
      if(err){
        console.log(err);
        res.send("There is an error !");
      } else{
          res.render("base", {title: "Express ", logout: "Logout successfully !"});
      }
      res.end();
    });
});


module.exports = router;