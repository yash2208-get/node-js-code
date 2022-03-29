const f=require('fs')
const path=require('path')
const new_file=path.join(__dirname,"t1.txt")
console.log(new_file);
// f.writeFileSync(new_file,"Hello Welcome java ");
let show1= f.readFileSync(new_file,'utf-8');
var count=show1.length;
console.log(count);
console.log("1 "+ show1)