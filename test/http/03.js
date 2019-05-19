var http=require('http');
var server=http.createServer();

server.on('request',function(res,resp){
    if(res.method=='GET'){
        console.log('GET请求方式')
    }else if(res.method=='POST'){
        console.log('POST请求方式')
    }
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8')
    resp.write('你好,node')
    resp.end();
})

server.listen(8080,function(){
    console.log('请访问http://localhost:8080')
})