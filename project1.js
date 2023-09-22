const http=require('http');
const port=8000;
const fs=require("fs");

const server=http.createServer((req,res)=>{

    res.writeHead(200,{
        'content-type':'text/html'
    });
    const path=req.url;
    let filepath;
    console.log(path);
    switch(req.url)
    {
    
        case '/':
        filepath='./views/home.html'
        break;

        case '/about':
            filepath='./views/about.html'
            break;
        
        case '/services':
            filepath='./views/services.html'
            break;    
        default:
            filepath='./views/404.html'

    }

 

    fs.readFile(filepath,(err,data)=>{
        if(err)
        {
            console.log("error reading file ",err);
            return;
        }

        return res.end(data);
    })

})

server.listen(port,(err)=>{
    if(err)
    {
        console.log("error",err);
        return;
    }
    console.log("server run successully on port :-",port);
})
