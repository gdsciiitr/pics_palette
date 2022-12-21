const express=require("express")
const router=express.Router()
const postDB=require("../models/Post")
const userDB=require("../models/User")
const verifyToken=require('../middleware/verify')


const upload=require('../handlers/multer')
const cloudinary=require('../utilis/cloudinary')

//create the post...
router.post("/",verifyToken,upload.single("img"),async(req,res)=>{
    
    //using clodinary to get the post url
    const result=await cloudinary.uploader.upload(req.file.path);
    const imageUrl=result.secure_url;
    
    // const newPost=await new postDB({
    //     userId:req.body.userId,
    //     title:req.body.title,
    //     img:imageUrl
    // })
    req.body.img=imageUrl;
    const newPost= new postDB(req.body)
    
    try {
        const savedPost=await newPost.save()
        res.status(200).json({message:"New Post Created",savedPost}) 
    } catch (error) {
        res.status(500).json({message:"Error occured",error})
        
    }
})

// update a post
// image update->no
router.put("/:id",verifyToken,async(req,res)=>{
    try {
        const post=await postDB.findById({_id:req.params.id})
        if(post.userId===req.body.userId)
        {
            const updatedPost=await post.updateOne({$set:req.body})
            res.status(200).json({message:"Successfully updated the post",updatedPost})
        }
        else
        {
            res.status(403).json({message:"Cannot edit someone elses post"})
        }
    } catch (error) {
        res.status(404).json({message:"Post not found",error})
    }
})

//delete the post
router.delete("/:id",verifyToken,async(req,res)=>{
    try {
        const post=await postDB.findById({_id:req.params.id})
        if(post.userId===req.body.userId)
        {
            const deletedPost=await post.deleteOne()
            res.status(200).json({message:"Successfully deleted the post",deletedPost})
        }
        else
        {
            res.status(403).json({message:"Cannot delete someone elses post"})
        }
    } catch (error) {
        res.status(404).json({message:"Post not found",error})
    }
})

//likes
router.put("/:id/like",verifyToken,async(req,res)=>{
    try {
        const post=await postDB.findById({_id:req.params.id})
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json({message:"Successfully liked the post"})

        }
        else
        {
            res.status(403).json({message:"You already like the post"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


//dislike
router.put("/:id/like",verifyToken,async(req,res)=>{
    try {
        const post=await postDB.findById({_id:req.params.id})
        if(post.likes.includes(req.body.userId))
        {
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json({message:"Successfully disliked the post"})
            
        }
        else
        {
            res.status(403).json({message:"You don't like the post"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

//get post
router.get("/:id",verifyToken,async(req,res)=>{
    try {
        const post=await postDB.findById({_id:req.params.id}) //post='null'
        res.status(200).json({message:"Post found",post})

    } catch (error) {
        res.status(500).json({message:"Error occuried",error})
    }
})


//get timeline posts
router.get('/timeline/all',verifyToken,async(req,res)=>{
        try {
          const posts = await postDB.find().sort({createdAt:-1});
          if(posts){
            res.status(200).json({message:'All the posts that we have',posts});
          }else{
            res.status(401).json({message:'No Posts Found'});
          }
        } catch (err) {
          res.status(404).json({ message: err.message });
        }
})


//Seach bar
//to find posts of users with the username
router.get('/search',async(req,res)=>{
    try {
        const {username}=req.query
        const queryObject={}
        if(username)
        {
            queryObject.username={$regex:username,$options:"i"}
        }
        try {
            const usersFound=await userDB.find(queryObject)
            // const posts=[]
            // usersFound.map(async(e)=>{
            //     const usersPost=await postDB.findById({_id:e._id})
            //     posts.concat(...usersPost)
        
            // })
            const posts=await Promise.all(usersFound.map(async(e)=>{
                const userPost=await postDB.findById({userId:e._id})
                return userPost
            }))
            res.status(200).json({message:`All posts with ${username} sent`,posts})
            
        } catch (error) {
            res.status(404).json({message:"Error occured in finding the data ",error})
        }
        
    } catch (error) {
        res.status(500).json({message:"Error occured",error})
    }
})



//Filter bar
router.get('/filter',async(req,res)=>{
    try {
        const{title,eventYear}=req.query;
        const queryObject={}
        if(title)
        {
            queryObject.title={$regex:title,$options:"i"}
        }
        if(eventYear)
        {
            queryObject.eventYear=eventYear
        }
        try {
            const posts=await postDB.find(queryObject)
            res.status(200).json({message:`All posts of the event ${title} sent`,posts})
            
        } catch (error) {
            res.status(404).json({message:"Error occured in finding the data ",error})
        }
        
    } catch (error) {
        res.status(500).json({message:"Error occured",error})
    }
       

})
//getByBatch

router.get('/getByBatch',async(req,res)=>{
    try {
        const {batch}=req.query
        const queryObject={}
        if(batch)
        {
            queryObject.batch=batch
        }
        try {
            const usersFound=await userDB.find(queryObject)
            // const posts=[]
            // usersFound.map(async(e)=>{
            //     const usersPost=await postDB.findById({_id:e._id})
            //     posts.concat(...usersPost)
        
            // })
            const posts=await Promise.all(usersFound.map(async(e)=>{
                const userPost=await postDB.findById({userId:e._id})
                return userPost
            }))
            res.status(200).json({message:`All posts of batch ${batch} sent`,posts})
            
        } catch (error) {
            res.status(404).json({message:"Error occured in finding the data ",error})
        }
        
    } catch (error) {
        res.status(500).json({message:"Error occured",error})
    }

})
//getBycatagory
router.get('/getByCatagory',async(req,res)=>{
    try {
        const {catagory}=req.query
        const queryObject={}
        if(catagory)
        {
            queryObject.catagory=catagory
        }
        try {
            const posts=await postDB.find(queryObject)
            res.status(200).json({message:`All posts with ${catagory} sent`,posts})
            
        } catch (error) {
            res.status(500).json({message:"Error finding by catagory"})
        }
    } catch (error) {
        res.status(500).json({message:"Error Occurred",error})
    }
})

module.exports=router
