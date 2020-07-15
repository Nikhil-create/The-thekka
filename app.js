var fs =require('fs');
var http =require('http');
var server=http.createServer(function(req,res){
  console.log('Request was made: '+req.url);
  res.writeHead(200,{'Content-Type':'text/html'});
  fs.createReadStream(__dirname +'/first_page.html').pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('SERVER IS OPEN');
