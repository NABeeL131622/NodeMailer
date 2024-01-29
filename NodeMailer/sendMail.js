const nodeMailer=require('nodemailer')
const emails=['nabeelma@gmail.com']
const dotenv=require("dotenv").config()
const pass=process.env.PASS

 const sendMail=async (emails,otp)=>{
  const transporter=  nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'nabeelma@gmail.com',
            pass:`${pass}`
        }
    });
   const info= await transporter.sendMail({
    from:'"Nodemailer"<nabeelma@gmail.com>',
    to:emails,
    subject:'testinggggggg',
    html:`<h2>${otp}</h2>`,

   })
  
}
module.exports=sendMail