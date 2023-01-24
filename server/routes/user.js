const express=require("express")
const router=express.Router()
const bcrypt=require("bcryptjs")
const userDB=require("../models/User")
const postDB=require("../models/Post")
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
router.get("/:id", async (req, res) => {

    const userId=req.params.id;
    console.log(userId);
    try {
        const user=await userDB.findById({_id:userId});
        console.log(user);
        const {password,createdAt,...userData}=user._doc;
        console.log(userData);
        const allPosts=await postDB.find({userId:userId})
        console.log(allPosts);
        res.status(200).json({message:"User found",userData,allPosts});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error finding in user",error})
    }
  });

module.exports=router
