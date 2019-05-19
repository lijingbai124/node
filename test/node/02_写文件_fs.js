var fs=require("fs");
var data=new Uint8Array(Buffer.from("你好，node"));

fs.writeFile('文件.txt',data,function(err){
    if (err) throw err;
    console.log("文件已经保存")
});
