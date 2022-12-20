const mongoose=require("mongoose")

const postSchmea=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
    },
    img:{
        type:String,
    },
    likes:{
        type:Array,
        default:[]
    },
    tags:{
        type:Array
    },
    eventYear:{
        type:String,
    }
},{timestamps:true})

module.exports=mongoose.model("Post",postSchmea)
