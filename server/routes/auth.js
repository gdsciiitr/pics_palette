const express=require("express")
const router=express.Router()
const userDB=require("../models/User")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const fs=require('fs');

const upload=require('../handlers/multer');
const cloudinary=require('../utilis/cloudinary');

//REGISTER
router.post("/register",upload.single("profilePicture"),async(req,res)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    
    //using clodinary to get the profile url 
    const result=await cloudinary.uploader.upload(req.file.path);
    const imageUrl=result.secure_url;

    const newUser= await new userDB({
        username:req.body.username, 
        email:req.body.email,
        password:hash,
        profilePicture:imageUrl,
        desc:req.body.desc,
        city:req.body.city,
        batch:req.body.batch,
    })
    try {
        const saved=await newUser.save();
        console.log(saved)
        res.status(200).json(saved)
    } catch (error) {
        res.status(400).json(error)
        console.log(error)
    }
})

//LOGIN
router.post("/login",async(req,res)=>{
    const email=req.body.email
    const validUser=await userDB.findOne({email:email})

    try {
        
        if(validUser)
        {            
            try {

                const verify=await bcrypt.compare(req.body.password,validUser.password)
                if(verify)
                {
                    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
                    res.status(200).json({validUser,token});
                }
                else
                {
                    res.status(400).json({message:"Password Incorrect"})
                }
            } catch (error) {
                console.log("Error in verifying password")
                console.log(error)
            }
        }
        else
        {
            res.status(404).json({message:"User not found!!"})
        }
    } catch (error) {
        console.log("Error in finding user")
        console.log(error)
    }
})

module.exports=router
