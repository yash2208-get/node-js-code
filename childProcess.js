let cp=require("child_process");
// console.log(cp)
// cp.execSync("calc");
// cp.execSync("code");
let v=cp.execSync("node text.js");
console.log(""+v);