const http=require('http');
const port=8000;


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Wow this is response from first server </h1>");
    res.write("<h2>ok nice work </h2>");
    res.write("<button>click me </button>");
    res.end("end by bye");
});

server.listen(port,(err)=>{
    if(err)
    {
        console.log("failed starting the server");
        return;
    }
    console.log("server is up and running on port :",port);
});