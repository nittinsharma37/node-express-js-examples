// const hello = require('./1_intro');

// let result = hello.addNumbers(4, 5);

// console.log("The result  : %d ", result);

// result = hello.subNumbers(6, 5);
// console.log("The result  : %d ", result);

// const fs  = require('fs');

// fs.mkdirSync("demo");

// const dataToWrite  = fs.writeFileSync("./demo/read.txt", "Hello welcome to this file.");
// fs.appendFileSync("./demo/read.txt", " \n Do it from here !");

// const data = fs.readFileSync("./demo/read.txt", "utf8");

// console.log(data);

// fs.renameSync("./demo/read.txt", "./demo/mybio.txt");

// fs.unlinkSync("./demo/mybio.txt");

// fs.rmdirSync("demo");





// console.log(__dirname);
// console.warn(__filename);

// const os = require('os');

// console.log(os.arch());
// console.log(os.cpus());

// console.log(os.endianness());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.loadavg());
// console.log(os.networkInterfaces());

// console.log(os.platform());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());

// setInterval(function() {  
//     console.log("setInterval: Hey! 1 millisecond completed!..");   
//    }, 100);  


// try {
//     const a = 1;
//     const c = a + b;
//     console.log(c);
// } catch (err) {
//     console.log(err);
// }


//Promies in js

// let done = false;
// const isItDoneYet = new Promise((resolve, reject ) => {
//     if (done) {
//         const workDone = "Here is the thing i built";
//         resolve(workDone);
//     } else{
//         const why = "still working to something else";
//         reject(why);
//     }
// })

// const checkIfItsDone = () => {
//     isItDoneYet
//       .then(ok => {
//         console.log(ok)
//         conm
//       })
//       .catch(err => {
//         console.error(err)
//       })
//   }


//async and await in js


// const doSomethingAsync = ()=>{
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             console.log("hello");
//             resolve();
//         }, 3000)
//     })
// }

// const doSomething  = async ()=>{
//     console.log(await doSomethingAsync());
// }


// console.log("hello");


// setTimeout(() => {
//     console.log("two seconds delay ");
// }, 2000)
// console.log("Bye !");


// const a = 1
// const b = 2
// const c = a * b
// console.log(c)
// // doSomething()

// const promiseA = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('error of a()');
//     }, 1000);
// });


// promiseA.then((result ) => {
//     console.log(`promiseA result success :  ${result}`);
// }).catch((e) => {
//     console.log(`promiseA error : ${e}`);
// }).finally(() => {
//     console.log("result of promiseA()");
// });

// console.log("hello ")


// let done = true;

// const isItDoneYet = new Promise((resolve, reject) => {
//   if (done) {
//     const workDone = 'Here is the thing I built'
//     resolve(workDone)
//   } else {
//     const why = 'Still working on something else'
//     reject(why)
//   }
// })

// const checkIfItsDone = () => {
//   isItDoneYet
//     .then(ok => {
//       console.log(ok)
//     })
//     .catch(err => {
//       console.error(err)
//     })
// }

// checkIfItsDone()






// const fs = require('fs')

// const getFile = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
//         return        // and we don't want to go any further
//       }
//       resolve(data)
//     })
//   })
// }

// getFile('/etc/passwd')
// .then(data => console.log(data))
// .catch(err => console.error(err))


// const doSomethingAsync = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve('3 secs delay and it did something'), 5000);
//     })
// }

// const doSomething = async () => {
//     const resonse = await doSomethingAsync();
//     console.log(resonse);
// };
// console.log("Before");
// console.log(doSomething);
// console.log("after");

// const promiseToDoSomething = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('I did something'), 2000)
//   })
// }

// const watchOverSomeoneDoingSomething = async () => {
//   const something = await promiseToDoSomething()
//   return something + '\nand I watched'
// }

// const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
//   const something = await watchOverSomeoneDoingSomething()
//   return something + '\nand I watched as well'
// }

// watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
//   console.log(res)
// })



//////////////////////////////////////////////////////////////////////////////
////                                                                    /////
////                       Node js Event Emitter                       /////
////                                                                   /////
////////////////////////////////////////////////////////////////////////////


// imorting event module
// const Events =  require('events');
// const { response } = require('express');
// // initialising events
// const eventsEmitter = new Events();

// // start event 

// eventsEmitter.on('start', (start, end) => {
//     console.log("Event started " +" " +  start + " to " + end);

// })

// //Event handler or emmiter

// eventsEmitter.emit('start',1,100);




//////////////////////////////////////////////////////////////////////////////
////                                                                    /////
////                Http module to create server                       /////
////                                                                   /////
////////////////////////////////////////////////////////////////////////////


// // importing http module

// const httpServe = require('http');
// //importing file system for accessing files 

// const fs = require('fs');

// //importing path for getting paths

// const path = require('path');

// //assigning the port to listen

// const portToListen = 2000;



// const server = httpServe.createServer((request, response) => {
//     if (request.url === "/") {
//         fs.readFile("./portfolio/index.html", "UTF-8", (err, html) => {
//             response.writeHead(200, {
//                 "Content-Type": "text/html"
//             });
//             response.end(html);
//             console.log(request.url)
//         });
//     } else if (request.url === "/about") {
//         // fs.readFile("./portfolio/index.html", "UTF-8", (err, html) => {
//         //     response.writeHead(200, {
//         //         "Content-Type": "text/html"
//         //     });
//         //     response.end(html);
//         //     console.log(request.url)
//         // });
//         response.end("About page!!!");
//     } else if (request.url.match("\.css$")) {
//         let cssPath = path.join(__dirname, 'portfolio', request.url);
//         let fileStream = fs.createReadStream(cssPath, "UTF-8");
//         response.writeHead(200, {
//             "Content-Type": "text/css"
//         });
//         fileStream.pipe(response);
//         console.log(request.url);
//     } else if (request.url.match("\.js$")) {
//         let jsPath = path.join(__dirname, 'portfolio', request.url);
//         let fileStream = fs.createReadStream(jsPath, "UTF-8");
//         response.writeHead(200, {
//             "Content-Type": "text/js"
//         });
//         fileStream.pipe(response);
//         console.log(request.url);

//     } else if (request.url.match("\.png$")) {
//         let pngPath = path.join(__dirname, 'portfolio', request.url);
//         let fileStream = fs.createReadStream(pngPath);
//         response.writeHead(200, {
//             "Content-Type": "image/png"
//         });
//         fileStream.pipe(response);
//         console.log(request.url);
//     } else if (request.url.match("\.jpg$")) {
//         let jpgPath = path.join(__dirname, 'portfolio', request.url);
//         let fileStream = fs.createReadStream(jpgPath);
//         response.writeHead(200, {
//             "Content-Type": "image/jpeg"
//         });
//         fileStream.pipe(response);
//         console.log(request.url);
//     } else {
//         fs.readFile("./portfolio/404_page.html", "UTF-8", (err, html) => {
//             response.writeHead(404, {
//                 "Content-Type": "text/html"
//             });
//             response.end(html);
//             console.log(request.url)
//         });
//         console.log(request.url);
//     }
// });

// server.listen(portToListen, () => {
//     console.log("Server running at port : " + " " + portToListen);
// })


//////////////////////////////////////////////////////////////////////////////
////                                                                    /////
////                             Events Module                         /////
////                                                                   /////
///////////////////////////////////////////////////////////////////////////


// const EventEmitter = require('events');
// //instance of eventEmitter class
// const events = new EventEmitter();

// events.on("Start", (status, msg) => {
//     console.log(`Event Started ! wiht status : ${status} and message : ${msg}`);
// });

// events.emit("Start", 200, "ok");

// const car = require('./module1.js');

// console.log(car.brand + " " + car.model);


// callback 

// function getMessage(msg,callback){
//     setTimeout(()=>{
//         console.log(msg);
//         callback();
//     }, 1000);
// }

// function displayMessage(){
//     console.log("Display message !");
// }

// getMessage("Get message !", ()=> {
//     console.log("Display msg");
//     displayMessage();
// });


//promises 

// let pro = new Promise(function(resolve, reject){
//     setTimeout(()=> resolve("Run before"), 1000);
// });

// pro.then(
//     result => {
//         console.log(result);
//         getAfter();
//     },
//     err => console.log(err),
// );


// function getAfter(){
//     console.log("Run after!");
// }


// async await 

// function clown(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("😍😍");
//         });
//     }, 5000);
// }

// async function msg(cb){
//     const msg = await clown();
//     console.log("Message : ",msg);
//    cb();

// }

// msg(getResult);

// function getResult(){
//     console.log("Execute after !");
// }




//http request get 

// const http = require("http");

// http.get("http://api.open-notify.org/astros.json", response => {
//     let responseData = "";

//     response.on("data", dataPieces => {
//         responseData += dataPieces;
//     });

//     response.on("end", () => {
//         let responseDataJson = JSON.parse(responseData);
//         console.log(responseDataJson);
//     });
// });


// http post request 


// var http = require('https');

// const dataToPost = JSON.stringify({
//     name: "Mike Tyson",
//     job: "Graphic Designer",
// });


// const requestOptions = {
//     hostname: 'reqres.in',
//     path: '/api/users',
//     method: 'POST',
//     header: {
//         'Content-Type' : 'application/json',
//     }
// };

// //request

// const requestToPost = http.request(requestOptions, (response) => {
//     let bodyData = "";
//     console.log("Status code : ",response.statusCode);

//     response.on("data", (dataChunk) => {
//         bodyData =+ dataChunk;
//     });

//     response.on("end", () => {
//         console.log("body : ", JSON.stringify(bodyData));
//     })

// });

// requestToPost.write(dataToPost);
// requestToPost.end();


// http post request using axios library


// const axios  = require("axios");


// const dataToPost = JSON.stringify({
//     name: "Mike Tyson",
//     job: "Graphic Designer",
// });


// axios.post("https://reqres.in/api/users", dataToPost).then((response) => {
//     console.log(`Status Code: ${response.status}`);
//     console.log(`Body : ${JSON.stringify(response.data)}`);
// }).catch((err) => {
//     console.log(err);
// });;


// path modules 


// const { isAbsolute } = require("path");
// const path = require("path");

// file = path.basename("hello/test.json");
// file = path.dirname("hello/test.json");
// // isAbsolute method and join method
// file = path.parse("hello/test.json");
// file = path.resolve("hello/","test.json");
// console.log(file);


// event modules allows us to perform events

// const events = require('events');

// let ev  = new events.EventEmitter();
// let c1 = (code,msg) => {
//     console.log(`Got ${code} and ${msg}`);
// };
// ev.on("my_event", function(data){
//     console.log("Event : ",data);
// });


// ev.once("event_once", c1);

// ev.off("event_once", c1);

// ev.emit("my_event", "call emit() method to fire y_event ");
// ev.emit("event_once", 200, "ok");



//      streams 


// const  http = require('http');
// const fs = require("fs");

// const server = http.createServer(function(req,res){
//     const stream = fs.createReadStream("test.json");
//     stream.pipe(res);
// });


// server.listen(2000);


// //          Buffers 



// const buf = Buffer.alloc(5);
// buf.write("hello")
// console.log(buf);
// console.log(buf[0]);

// buf[1] = 111//0
// console.log(buf[1]);


//      Exceptions handlings in node js 

// throw new Error("error demo ");

try {
    console.log("Start try block !");
   
} catch (e) {
    console.log("Error : ", e);
}