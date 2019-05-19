var http=require('http');
var fs=require('fs');
var server=http.createServer();

server.on('request',function(res,resp){
    if(res.method=='GET'){
        console.log('GET请求方式')
    }else if(res.method=='POST'){
        console.log('POST请求方式')
    }
    resp.setHeader('Content-Type', 'text/html;charset=utf-8')
    fs.readFile('./index01.html',function(err,data){
        if (err) throw err;
        console.log('读取文件成功');
        resp.end(data);
    })
})

server.listen(8080,function(){
    console.log('请访问http://localhost:8080')
})