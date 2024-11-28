// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import UserRoutes from './routes/user.route.js';
// import AuthRoutes from './routes/auth.route.js';
// import cookieParser from 'cookie-parser';
// import postRoutes from './routes/post.route.js';
// dotenv.config();
// import Comment from './routes/comment.route.js';
// import cors from 'cors';

// mongoose.connect(process.env.MONGO).then(() => {
//     console.log('mongodb is connected');
// })
//     .catch((err) => {
//         console.log("error : Mongodb is not connected ");
//     })
//     const app = express();
//     app.use(cors({
//         origin: 'http://localhost:5173',
//         credentials: true, // Include cookies if needed
//       }));


// app.use(express.json());
// app.use(cookieParser());



// app.listen(3000, () => {
//     console.log(`server is running on 3000 port!!`);
// })
// app.use('/api/user', UserRoutes);
// app.use('/api/auth', AuthRoutes);
// app.use('/api/post',postRoutes);  
// app.use('/api/comment',Comment);

// app.use((err,req,res,next)=>{
//     const statusCode=err.statusCode || 500;
//     const message=err.message || 'Internal Server Error';
//     res.status(statusCode).json({
//         sucess:false,
//         statusCode,
//         message
//     })
// })

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
dotenv.config();



mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from your frontend
  credentials: true, // Allow cookies or other credentials if needed
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true // Enable cookies if required
  }));
app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.send();
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});