let f=require('fs')
let path=require('path')
// console.log(f);
let name_file=path.join(__dirname,"t1.js")
console.log(name_file);
f.writeFileSync(name_file,"Hello Welcome ");