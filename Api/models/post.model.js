import mongoose from "mongoose";
const postSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.grammarly.com%2Fblog%2Fhow-to-write-a-blog%2F&psig=AOvVaw0P74WGUTD-xIZH7ETXf-po&ust=1723229597624000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjr6uGI5ocDFQAAAAAdAAAAABAE',

    },
    category:{
        type:String,
        default:'uncategorized',

    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },

   
},    { timestamps:true},);
const Post=mongoose.model('Post',postSchema);
export default Post;