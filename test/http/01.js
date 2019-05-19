//引入http核心模块
var http=require('http');
//创建一个服务
var server=http.createServer();

server.on('request',function(res,rs){
    console.log(res.method);
    rs.write('hello');
    rs.end();
})
//启动监听
server.listen(8080,function(){
    console.log("请访问http://localhost:8080");
}); 
