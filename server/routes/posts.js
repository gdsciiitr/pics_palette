const express=require("express")
const router=express.Router()
const postDB=require("../models/Post")
const userDB=require("../models/User")
const verifyToken=require('../middleware/verify')

const upload=require('../handlers/multer')
const cloudinary=require('../utilis/cloudinary')

//create the post...
router.post("/",verifyToken,upload.single("img"),async(req,res)=>{
    const {userId,title,desc,tags,category,eventYear}=req.body;

    //using clodinary to get the post url
    const result=await cloudinary.uploader.upload(req.file.path);
    const imageUrl=result.secure_url;

    const user=await userDB.findById(userId);
    console.log(user); //

    const newPost=new postDB({
        userId,
        username:user.username,
        title,
        desc,
        img:imageUrl,
        tags,
        category,
        eventYear,
        userPic:user.profilePicture         
    })
    
    try {
        const savedPost = await newPost.save()
        res.status(200).json({ message: "New Post Created", savedPost })
    } catch (error) {
        res.status(500).json({ message: "Error occured", error })
    }
})


// update a post
// image update->no
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const post = await postDB.findById({ _id: req.params.id })
        if (post.userId === req.body.userId) {
            const updatedPost = await post.updateOne({ $set: req.body })
            res.status(200).json({ message: "Successfully updated the post", updatedPost })
        }
        else {
            res.status(403).json({ message: "Cannot edit someone elses post" })
        }
    } catch (error) {
        res.status(404).json({ message: "Post not found", error })
    }
})

//delete the post
router.delete("/:id", verifyToken,async (req, res) => {
    try {
      const post = await postDB.findById(req.params.id);
      if (post.userId) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err+"in deletion");
    }
});


//like / dislike a post
router.put("/:id/like", async (req, res) => {
    try {
      const post = await postDB.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ $push: { likes: req.body.userId } });
        res.status(200).json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { likes: req.body.userId } });
        res.status(200).json("The post has been disliked");
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//get post
router.get("/:id", verifyToken, async (req, res) => {
    try {
        const post = await postDB.findById({ _id: req.params.id }) //post='null'
        res.status(200).json({ message: "Post found", post })
    } catch (error) {
        res.status(500).json({ message: "Error occuried", error })
    }
})


//get timeline posts
router.get('/timeline/all', verifyToken, async (req, res) => {
    try {
        const posts = await postDB.find().sort({ createdAt: -1 });
        for (var i = posts.length - 1; i > 0; i--) { 
   
             
            var j = Math.floor(Math.random() * (i + 1));
                        
            var temp = posts[i];
            posts[i] = posts[j];
            posts[j] = temp;
        }
        if (posts) {
            res.status(200).json({ message: 'All the posts that we have', posts });
        } else {
            res.status(401).json({ message: 'No Posts Found' });
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})

router.get('/timeline/recentall', verifyToken, async (req, res) => {
    try {
        const posts = await postDB.find().sort({ createdAt: -1 });
        if (posts) {
            res.status(200).json({ message: 'All the posts that we have', posts });
        } else {
            res.status(401).json({ message: 'No Posts Found' });
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})

router.get('/timeline/topall', verifyToken, async (req, res) => {
    try {
        const posts = await postDB.find().sort({ likes: -1 });
        if (posts) {
            res.status(200).json({ message: 'All the posts that we have', posts });
        } else {
            res.status(401).json({ message: 'No Posts Found' });
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})

router.get('/timeline/recent',  async (req, res) => {
    try {
        const posts = await postDB.find().sort({ createdAt: -1 }).limit(10);
        if (posts) {
            res.status(200).json({ message: 'All the posts that we have', posts });
        } else {
            res.status(401).json({ message: 'No Posts Found' });
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})

router.get('/timeline/top', verifyToken, async (req, res) => {
    try {
        const posts = await postDB.find().sort({ likes: -1 }).limit(4);
        if (posts) {
            res.status(200).json({ message: 'All the posts that we have', posts });
        } else {
            res.status(401).json({ message: 'No Posts Found' });
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})
//Seach bar


router.get('/search/find',async(req,res)=>{
    try {
        console.log(req.query);
        const {username}=req.query;
        console.log(username);
        const queryObject={}; 
        if(username)
        {
            queryObject.username = { $regex: username, $options: "i" }
        }
        console.log(queryObject.username);
        // console.log();
        // console.log(queryObject);
        const users=await userDB.find(queryObject);
        // console.log(users);
        // console.log(users[0]._id);
        const totalpost=await Promise.all( users.map(async(e)=>{
            // console.log(e._id);
            const posts=await postDB.find({userId:e._id})
            return (posts);
        }));
        console.log(totalpost.length);
        res.status(200).json({message:`All posts with ${queryObject.username} is`,totalpost});
        // console.log(totalpost);
    } catch (error) {
        res.status(500).json({message:"Error occured!",error})
    }
    })

//Filter bar
// router.get('/filter',async(req,res)=>{
//     try {
//         const{title,year}=req.query;
//         const queryObject={}
//         if(title)
//         {
//             queryObject.title={$regex:title,$options:"i"}
//         }
//         if(year)
//         {
//             queryObject.year=year
//         }
//         try {
//             const posts = await postDB.find(queryObject)
//             res.status(200).json({ message: `All posts of the event ${title} sent`, posts })

//         } catch (error) {
//             res.status(404).json({ message: "Error occured in finding the data ", error })
//         }

//     } catch (error) {
//         res.status(500).json({ message: "Error occured", error })
//     }


// })
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
//getByBatch

// router.get('/getByBatch',async(req,res)=>{
//     try {
//         const {batch}=req.query
//         const queryObject={}
//         if(batch)
//         {
//             queryObject.batch=batch
//         }
//         try {
//             const usersFound=await userDB.find(queryObject)
//             // const posts=[]
//             // usersFound.map(async(e)=>{
//             //     const usersPost=await postDB.findById({_id:e._id})
//             //     posts.concat(...usersPost)
        
//             // })
//             const posts=await Promise.all(usersFound.map(async(e)=>{
//                 const userPost=await postDB.findById({userId:e._id})
//                 return userPost
//             }))
//             res.status(200).json({message:`All posts of batch ${batch} sent`,posts})
            
//         } catch (error) {
//             res.status(404).json({message:"Error occured in finding the data ",error})
//         }
        
//     } catch (error) {
//         res.status(500).json({message:"Error occured",error})
//     }

// })
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

module.exports = router
