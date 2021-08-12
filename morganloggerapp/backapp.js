const morgan = require('morgan');
const express = require("express");
const fs = require("fs");
const path = require("path");
const {v4: uuidv4} = require("uuid");

const app = express();
const port = process.env.PORT || 2000;

morgan.token('id', function getid(req){
        return req.id;
});

morgan.token("param", function(req,res,param){
        return "userToken";
});

app.use(assignid);

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {flags: "a"});

app.use(morgan(":param :id :method :url'HTTP/:http-version' :status :res[content-length] - :response-time ms"));
app.use(morgan(":param :id :method :url'HTTP/:http-version' :status :res[content-length] - :response-time ms", {stream: accessLogStream}));


app.get('/', (req, res) => {

        res.send('Morgan logger app');

});


function assignid(req,res,next){
        req.id = uuidv4();
        next();
}


app.listen(port, () => {
        console.log(`Listening on port : ${port}`)
});