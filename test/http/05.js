var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (res, resp) {
    var urls = res.url;
    console.log('请求路径：' + urls)
    if (urls == '/') {
        resp.setHeader('Content-Type', 'text/html;charset=utf-8')
        fs.readFile('./index01.html', function (err, data) {
            if (err) throw err;
            console.log('读取文件成功');
            resp.end(data);
        })
    } else {
        //响应一切http请求的静态资源
        fs.readFile('.' + urls, function (err, data) {
            if (err) throw err;
            console.log('读取图片成功');
            resp.end(data)
        })
    }

})

server.listen(8080, function () {
    console.log('请访问http://localhost:8080')
})