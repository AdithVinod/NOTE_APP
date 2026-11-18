import express from 'express'
const app = express();
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js"
import cors from 'cors';

import { connectDB } from './config/db.js';
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

dotenv.config();

app.use("/api/users", userRoutes);

const port = process.env.PORT;

app.get("/", (req, res)=>{
    res.send('server is ready');
    
});

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});