//readFile

const fs=require('fs');
const { parse } = require('path');



fs.readFile("./abc.txt",(err,data)=>{
    if(err)
    {
        console.log("error reading the file...",err);
        return;
    }
    //before printing we are changing the data into string..
    console.log(data.toString());
})

console.log("terminated..");

//WriteFile
let content="hi how are you everyone and goodmorning mumbai";
fs.writeFile("./newabc.txt",content,(err)=>{
    if(err)
    {
        console.log("error writing the file...",err);
        return; 
    }
    console.log("content written successfully......");


})
console.log("wow ! this is dynamic content....")
//appendFile


let content1="This is appended text...........";
fs.appendFile("./newabc.txt",content1,(err)=>{
    if(err)
    {
        console.log("error writing the file...",err);
        return; 
    }
    console.log("content appended successfully......");


})

//deleteFile
fs.unlink("./del.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log("deleted");
    }
})