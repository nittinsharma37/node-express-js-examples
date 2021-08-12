const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const router = require("./router");


app.use("/api", router);

app.get('/' , (req , res)=>{

   res.end("Routing app");

});

app.listen(port, () => {
        console.log("Server listening on port : " + port);
});