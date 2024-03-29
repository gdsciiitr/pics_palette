const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const morgan=require("morgan")
const helmet=require("helmet")
const cors=require("cors");
const app=express()
const bodyParser=require('body-parser')
dotenv.config()
const port = process.env.PORT || 5000;

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/posts");
const register = require('./routes/auth');

//middlewares
app.use(express.json())
app.use(bodyParser.json()).use(bodyParser.urlencoded({extended:true}))

app.use(helmet())
app.use(morgan("common"))
app.use(cors());
// app.use(cors({
//     origin:["http://localhost:3000","https://picture-book-iiitr.vercel.app"]
// }));
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MONGO DB successfully")
}).catch((e) => {
    console.log("Error in connecting");
    console.log(e);
})

app.get("/",(req,res)=>{
    res.status(200).json({message:"Picture Book backend is online   "})
})
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})

