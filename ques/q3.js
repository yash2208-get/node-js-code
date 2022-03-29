let f=require('fs');
let path=require('path');
let scrpath=path.join(__dirname,"..","..","index.html");
let deisth=path.join(__dirname,"..","index.html");
// console.log(deisth);
f.copyFileSync(scrpath,deisth);