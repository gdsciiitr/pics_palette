const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const userDB=require("../models/User")
const verifyToken=require('../middleware/verify')

//update user information
router.put("/:id",verifyToken,async(req,res)=>{
    if(req.body.userId===req.params.id||req.body.isAdmin)
    {
        if(req.body.password)
        {
            try {
                const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                res.status(500).json(error);
            }            
        }
        try {
            const updateUser=await userDB.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            res.status(200).json({message:"Account has been updated",updateUser})
            console.log(updateUser)
        } catch (error) {
            res.status(500).json(error)
        }

    }
    else
    {
        res.status(500).json({message:"Not a valid credentials to update data"})
    }
})

//delete a user
router.delete("/:id",verifyToken,async(req,res)=>{
    if(req.body.userId===req.params.id||req.body.isAdmin)
    {
         try {
            const deletedUser=await userDB.findByIdAndDelete({_id:req.params.id})
            res.status(200).json({message:"Account has been deleted successfully",deletedUser})
            console.log(deletedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else
    {
        res.status(500).json({message:"Only admin or the person itself can delete their id "})
    }
})

//get a user
router.get("/:id",verifyToken,async(req,res)=>{
    try {
        const foundUser=await userDB.findById({_id:req.params.id})
        const{password,updatedAt,...other}=foundUser._doc
        res.status(200).json({message:"User Found",...other})
    } catch (error) {
        res.status(500).json({messsage:"Error finding the user",error})
    }
})

module.exports=router
