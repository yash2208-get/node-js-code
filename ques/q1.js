let f=require('fs');
let path=require('path');
if(!f.existsSync('new_folder')){
    f.mkdirSync('new_folder');
}

let pa=path.join(__dirname,"new_folder","newfile.txt");
console.log(pa)
f.writeFileSync(pa,"Hello Welcome java ");