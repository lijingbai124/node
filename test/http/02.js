var http=require('http');
var server=http.createServer();

server.on('request',function(res,rs){
    console.log(res.method)
    rs.write('hello')
    rs.end()
})

server.listen(8080,function(){
    console.log('请访问http://localhost:8080')
})

console.log('测试改变')
console.log('测试改变22')