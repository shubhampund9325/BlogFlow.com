import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.route.js';
import AuthRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
dotenv.config();
import Comment from './routes/comment.route.js';
mongoose.connect(process.env.MONGO).then(() => {
    console.log('mongodb is connected');
})
    .catch((err) => {
        console.log("error : Mongodb is not connected ");
    })
const app = express();

app.use(express.json());
app.use(cookieParser());



app.listen(3000, () => {
    console.log(`server is running on 3000 port!!`);
})
app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/post',postRoutes);  
app.use('/api/comment',Comment);
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    res.status(statusCode).json({
        sucess:false,
        statusCode,
        message
    })
})

