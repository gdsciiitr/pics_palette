const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const morgan=require("morgan")
const helmet=require("helmet")
const app=express()
dotenv.config()
const port=5000||process.env.PORT

const authRoute=require("./routes/auth")
const userRoute=require("./routes/user")
const postRoute=require("./routes/posts")
const register=require('./routes/auth');

//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MONGO DB successfully")
}).catch((e)=>{
    console.log("Error in connecting");
    console.log(e);
})


app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})
