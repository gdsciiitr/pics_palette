const express=require("express")
const router=express.Router()
const userDB=require("../models/User")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const fs=require('fs');

// for Storage of file
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')  //img--> uploads 
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})

//can not upload file of size more than 5mb 
const upload=multer({storage:storage}); 

// filefilter
// limits

// Here note that the key name or the field name that you are providing in form 
// data should be the same as the one provided in the multer({storage}).single("profile") (here name is profile).

//REGISTER
router.post("/register",upload.single("profile"),async(req,res)=>{   //profile is fieldName/keyname
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser= await new userDB({
        username:req.body.username, 
        email:req.body.email,
        password:hash,
        profilePicture:{
            data:fs.readFileSync("./uploads/" + req.file.filename), 
            contentType: 'image/png'
        }
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
