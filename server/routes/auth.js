const express = require("express")
const router = express.Router()
const userDB = require("../models/User")
const otpDB = require("../models/Otp");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const fs = require('fs');

const upload = require('../handlers/multer');
const cloudinary = require('../utilis/cloudinary');

//REGISTER
router.post("/register", upload.single("profilePicture"), async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        console.log("1")
        //using clodinary to get the profile url 
        console.log(req.file)
        console.log(req.body)
        let uploadedFile;
        let imageUrl = '';
        if (req.file) {

            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                resource_type: "image",
                folder: 'Project Pilot'
            })
            if (!uploadedFile) {
                res.status(500)
                throw new Error("Error in uploading file")
            }
            else {
                imageUrl = uploadedFile.secure_url;
            }

        }
        console.log("2")

        const newUser = new userDB({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            profilePicture: req.file ? imageUrl : "",
            batch: req.body.batch,
        })
        console.log("3")
        const saved = await newUser.save();
        console.log(saved)
        res.status(200).json(saved)
        console.log("4")

    } catch (error) {
        console.log("5")
        res.status(400).json(error)
        console.log(error + "error in saving user")
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const validUser = await userDB.findOne({ email: email })
        if (validUser) {
            try {

                const verify = await bcrypt.compare(req.body.password, validUser.password)
                if (verify) {
                    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
                    console.log(validUser);
                    res.status(200).json({ validUser, token });
                }
                else {
                    res.status(400).json({ message: "Password Incorrect" })
                }
            } catch (error) {
                console.log("Error in verifying password")
                console.log(error)
            }
        }
        else {
            res.status(404).json({ message: "User not found!!" })
        }
    } catch (error) {
        console.log("Error in finding user")
        console.log(error)
    }
})

//to send email
// router.post("/sendemail",async(req,res)=>{
//     let data=await userDB.findOne({email:req.body.email});
//     try{
//         if(data){
//             let otpCode=Math.floor((Math.random()*10000)+1);
//             let otpData=new otpDB({
//                 email:req.body.email,
//                 code:otpCode,
//                 expireIn:new Date().getTime()+300000
//             })
//             let otpResponse=await otpData.save();
//             // to send the email
//             mailer(req.body.email,otpCode);
//             res.status(200).json({message:"OTP sent to your email"+otpResponse});
//         }
//         else{
//             res.status(404).json({message:"User/email not found"});
//         }
//     }catch(err){
//         res.status(500).json({message:"Error in sending email"});
//     }
// })

// //to change the password
// router.post("/change-pwd",async(req,res)=>{
//     // res.status(200).json({message:"trying to change the Password..."});
//     let data=await Otp.find({email:req.body.email,code:req.body.otpCode});
//     try{
//         if(data){
//             let currentTime=new Date().getTime();
//             let diff=data.expireIn-currentTime;
//             if(diff<0){
//                 res.status(400).json({message:"OTP expired"});
//             }
//             else{
//                 let user=await userDB.findOne({email:req.body.email});
//                 const salt = await bcrypt.genSalt(10);
//                 const hash = await bcrypt.hash(req.body.password, salt);
//                 user.password=hash;
//                 let response=await user.save();
//             }
//         }
//         else{
//             res.status(404).json({message:"User/email not found"});
//         }
//     }catch(err){
//         res.status(500).json({message:"Error in changing password"});
//     }
// })

// const mailer=(email,otp)=>{
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         port:587,
//         secure:false,
//         auth: {
//             user:'kumaraditya7125@gmail.com',
//             pass:'randompassword'
//         }
//       });

//       var mailOptions = {
//         from: 'kumaraditya7125@gmail.com',
//         to: 'sachinsiwan537@gmail.com',
//         subject: 'Password Change Request',
//         text: 'verify your email to change the password'
//       };

//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//     }); 
// }

// router.get('/otp',async(req,res)=>{
//     let data=await otpDB.find();
//     res.status(200).json(data);
// })

//forget-password
router.post('/forget-password', async (req, res) => {
    const { email } = req.body;
    console.log("1")
    try {
        if (email) {
            const user = await userDB.findOne({ email: email });
            if (user) {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: "5m",
                });
                //send email
                // const link=`http://localhost:3000/user/reset/${user._id}/${token}`;
                const link = `https://picture-book-iiitr.vercel.app/user/reset/${user._id}/${token}`;
                const transport = nodemailer.createTransport({
                    service: "gmail",
                    host: "smtp.gmail.com",
                    port: 587,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.EMAIL_PASSWORD
                    },
                });
                console.log("2")

                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Reset Password",
                    text: `Please click on given link to reset your password`,
                    html: `<h2>Please click on given link to reset your password</h2>
                    <p>${link}</p>`
                };
                console.log("3")

                transport.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        res.status(500).json({ message: "Error in sending email" });
                        console.log("4")
                    } else {
                        res.status(200).json({ message: "Email sent successfully" });
                    }
                })

            } else {
                res.status(404).json({ message: "User not found" });
            }
        } else {
            res.status(404).json({ message: "Email is required" });
        }

    } catch (err) {
        res.status(500).json({ message: "Error in sending email" });
    }
})

router.post('/forget-password/:id/:token', async (req, res) => {
    const { newPassword, confirmPassword } = req.body;
    const { id, token } = req.params;
    try {
        if (newPassword && confirmPassword && id && token) {
            if (newPassword === confirmPassword) {
                //token verifying
                const verify = jwt.verify(token, process.env.JWT_SECRET);
                if (verify) {
                    const validUser = await userDB.findById(id);
                    const salt = await bcrypt.genSalt(10);
                    const hash = await bcrypt.hash(newPassword, salt);
                    const isSuccess = await userDB.findByIdAndUpdate(validUser._id, {
                        $set: {
                            password: hash
                        },
                    });
                    if (isSuccess) {
                        res.status(200).json({ message: "Password changed successfully" });
                    }

                } else {
                    res.status(404).json({ message: "Link is Expired" });
                }

            } else {
                res.status(404).json({ message: "Passwords do not match" });
            }

        } else {
            res.status(404).json({ message: "All fields are required" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error in resetting password" });
    }
})


module.exports = router
