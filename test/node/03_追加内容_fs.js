var fs=require("fs");

var appendData;

fs.readFile('./tt.txt','utf8',function(err,data){
    if (err) throw err;
    appendData=data+',追加后的';
    console.log(data);
    fs.writeFile('./tt.txt',appendData,function(err){
        if(!err){
            console.log('追加成功');
        }
    });
});
