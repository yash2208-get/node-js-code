let f=require('fs');
let path=require('path');
let arr=['audio','video','image','software','documents','applications','other'];
let arrfile=['abc','a1','a2','a3'];
let ex1=['.mp3','.mp4','.exe','.pdf','.apk','.rar'];
let p1=path.join(__dirname,'organies');
if(!f.existsSync('organies')){
    f.mkdirSync('organies');
}

for(let i=0; i<arr.length;i++)
{
    let floder1=path.join(p1,arr[i])
    if(!f.existsSync(floder1)){
        f.mkdirSync(floder1);
    }
    for(let j=0; j<arrfile.length;j++){
        let filename=arrfile[j]+ex1[i];
        let f1=path.join(floder1,filename);
        f.writeFileSync(f1," ");
    }
}

// let pa=path.join(__dirname,"new_folder","newfile.txt");
// console.log(pa)
// f.writeFileSync(pa,"Hello Welcome java ");