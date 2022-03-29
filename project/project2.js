const fs = require("fs");
const path = require("path");
const inparr =process.argv[2];
var err=fs.existsSync(inparr)
let extension= {
    audio:[".mp3"],
    video:[".mp4",".mkv"],
    document:[".doc",".xlsx",".pdf",".txt"],
    img:[".jpeg",".jpg",".png",".gif"],
    software:[".exe"]
};
if(err){
    let file1=fs.readdirSync(inparr);
    // console.log(file1);
    for(let i=0; i<=file1.length;i++){
        let ext=path.extname(file1[i]);
        let name_of_floder=givefolderName(ext);
        console.log("Ext---",ext," Folder---",name_of_floder);
        let pathoffolder=path.join(inparr,name_of_floder);
        let exit=fs.existsSync(pathoffolder);
        if(exit){
            movefile(inparr,pathoffolder,file1[i])
        }
        else{
            fs.mkdirSync(pathoffolder);
            movefile(inparr,pathoffolder,file1[i])
        }
    }
}

else{
    console.log("not")
}
function givefolderName(ext)
{
    for(let key in extension)
    {
        let extarr=extension[key];
        for(let i=0;i<extarr.length;i++){
            if(extarr[i]==ext){
                return key;
            }
        }
    }
    return 'Other';
}

function movefile(inparr,pathoffolder,file1){
    let scon=path.join(inparr,file1);
    let dis=path.join(pathoffolder,file1);
    fs.copyFileSync(scon,dis);
    fs.unlinkSync(scon);
}