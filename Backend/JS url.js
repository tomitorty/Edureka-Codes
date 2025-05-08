const http=require ("http");
const server=http.createServer((req,res)=>{
    console.log(req.url);
if (req.url =="/" & req.url=="/home"
    res.write("<h1>Hello You are at homepage</h1>");
    res.end();
})
else if (req.url =="/about"){
    res.end();
}
else {
    res.write("<h2>page not found</h2>");
    res.end();
}
server.listen(1000,()=>{
    console.log("server is running on port 1000");
})