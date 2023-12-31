const express=require("express");
const path=require('path');
const blogs=require("../data/blogs");

const router=express.Router();


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'));
})


router.get('/blogpage',(req,res)=>{

    res.sendFile(path.join(__dirname,'../templates/blogPage.html'));
})

router.get('/blog',(req,res)=>{
    blogs.forEach(e => {
        console.log(e);
    });
    
     res.sendFile(path.join(__dirname,'../templates/blogHome.html'));
 })

 router.get('/blogPost/:slug',(req,res)=>{
  myBlog = blogs.filter((e)=>{
    return e.slug==req.params.slug;
  })
    console.log(myBlog);
     res.sendFile(path.join(__dirname,'../templates/blogPage.html'));
 })

module.exports=router