const mailer=require("nodemailer");

let transport=mailer.createTransport({
    service:"gmail",
    auth: {
        user:"sidharthkumar161298@gmail.com",
        pass:"",
    },
});


let messageOb={
    from:"sidharthkumar161298@gmail.com",
    to:"sidhathkumar1612@gmail.com",
    subject:"Email using node Js",
    text:"This mail is send using node js"
}



transport.sendMail(messageOb,(error,info) =>{
    if(error)
    {
        console.log("errror ",error);
    }
    else
    {
      console.log("Email send");
      console.log(info.response);  
    }
});