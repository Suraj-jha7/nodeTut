const express=require('express');
const path=require('path');
const app=express();
const port=3000;

// const surajMiddleWare = (req,res,next)=>{
//     console.log(req);
//     console.log("hello welcome middleware");
//     next();
// }

app.use(express.static(path.join(__dirname,"public")));
//  app.use(surajMiddleWare);

// Below is middleware example...
// app.get(
//     "/",
//     (req, res, next) => {
//       console.log("hello");
//       next();
//     },
//     (req, res) => {
//       res.send(`<div>
//       <h2>Welcome to GeeksforGeeks</h2>
//       <h5>Tutorial on Middleware</h5>
//     </div>`);
//     }
//   );


app.get('/hello/:name',(req,res)=>{
    res.send('hellow ---------world!' + req.params.name);
});

app.get('/about',(req,res)=>{
    // res.send('hellow world! this is about');
    // res.status(500);
    res.json({"suraj":"jha"});
});
console.log(__dirname);
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})


app.listen(port,(err)=>{
if(err)
{
    console.log("error",err);
    return;
}

console.log("server is up and running on port :-",port);
})