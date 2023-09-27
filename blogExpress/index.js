const express=require('express');
const path=require('path');
const app=express();
const port=3000;


// app.use(express.static(path.join(__dirname,"static")));
app.use(express.static('./static'));

app.use('/',require(path.join(__dirname,'routes/blog.js')));



app.listen(port,(err)=>{
if(err)
{
    console.log("error",err);
    return;
}

console.log("server is up and running on port :-",port);
})