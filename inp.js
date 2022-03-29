let f=require('fs')
let path=require('path')
let inputarr =process.argv[2];
// let a=inputarr.length;
// console.log(inputarr);
let pa1=f.existsSync(inputarr);
if(pa1)
{
    let file1=f.readFileSync(pa1);
    console.log(file1);
}
else{
    console.log("not")
}

