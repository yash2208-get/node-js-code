let f=require('fs')
let path=require('path')
// console.log(f);
let name_file=path.join(__dirname,"t1.js")
console.log(name_file);
f.writeFileSync(name_file,"Hello Welcome java "); //it create file if it does not exists else it overide
//
let show1= f.readFileSync(name_file,'utf-8');
console.log("Before "+show1)

f.appendFileSync(name_file,'Data is append ')

let show2= f.readFileSync(name_file,'utf-8');
console.log("Afore "+show2)


//Delete

f.unlinkSync(name_file)
f.truncateSync(name_file,)

