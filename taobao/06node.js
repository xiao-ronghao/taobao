var http = require('http');
var fs = require('fs');

var server = http.createServer();
 
 server.on('request',function(req,res){
	var url = req.url;
	
	if(url === '/'){
		fs.readFile('./index.html',function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain;charset=utf-8')
				res.end('文件读取失败')
			}else{
				res.setHeader('Content-Type','text/html;charset=utf-8')
				res.end(data)
			}
		})
	}else if(url ==='/img'){
		fs.readFile('./1.jpg',function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain')
				res.end('文件读取失败')
			}else{
				res.setHeader('Content-Type','image/jpeg')
				res.end(data)
			}
		})
	}
})

server.listen(5000,function(){
	console.log('服务器启动成功，可以访问了。。。');
})