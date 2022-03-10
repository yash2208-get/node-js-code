let path=require('path')
// console.log(path);
let ext=path.extname("D:\fjp6\project\js\path.js");
console.log(ext);
let ba1=path.basename(__filename);
console.log(ba1);
console.log(__dirname);
console.log(__filename);
let dirPath=__dirname;
console.log(dirPath);
let name_file=path.join(dirPath,"text.js")
console.log(name_file);