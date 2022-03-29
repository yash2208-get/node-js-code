let f=require('fs')
let path=require('path')
let inputarr =process.argv[2];

let pa1=f.existsSync(inputarr);
let extension= {
    audio:[".mp3"],
    video:["mp4",".mkv"],
    document:[".doc",".xlsx",".pdf",".txt"],
    img:[".jpeg",".jpg",".png",".gif"],
    sof:[".exe"]
};
if(pa1)
{
    let file1=f.readdirSync(inputarr);
    console.log(file1);
    for(let i=0; i<file1.length;i++)
    {
        let ext=path.extname(file1[i]);
        let name_of_floder=givefolderName(ext);
        console.log("Ext---",ext," Folder---",name_of_floder);
        let pathoffolder=path.join(inputarr,name_of_floder);
        let exit=f.existsSync(pathoffolder);
        if(exit){
            movefile(inputarr,pathoffolder,file1[i])
        }
        else{
            f.mkdirSync(pathoffolder);
            movefile(inputarr,pathoffolder,file1[i])
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
    return 'other';
}
function movefile(inputarr,pathoffolder,file1){
    let scon=path.join(inputarr,file1);
    let dis=path.join(pathoffolder,file1);
    f.copyFileSync(scon,dis);
    f.unlinkSync(scon);
}
