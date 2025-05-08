const http= require ("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.write("<h1>Hello World</h1>");
    res.end();
})
server.listen(8080,()=>{
    console.log("server is running on port 8080");
})