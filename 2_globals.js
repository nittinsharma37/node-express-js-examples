console.log(__dirname);
console.log(__filename);
var  i = 0;
setInterval(()=> {
    console.log( i + " hello world !");
    i = i + 10;
}, 1);