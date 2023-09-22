const http=require("http");
const fs=require("fs");
const port=8000;
const url=require("url");


const server=http.createServer((req,res)=>{

    console.log(req.url);

    // if you want to pass query string then give true in below line
    let parsedurlobj=url.parse(req.url,true);
    console.log(parsedurlobj);
    console.log(parsedurlobj.query.keywords);
    console.log(parsedurlobj.query.name);
    
  

})


server.listen(port,(err)=>{
    if(err)
    {
        console.log("error starting the server",err);
        return;
    }

    console.log("server is up and runnning on port : ",port);

})