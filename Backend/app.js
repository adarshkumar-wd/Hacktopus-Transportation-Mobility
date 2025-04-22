import dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

export const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json())
app.use(cookieParser());

app.get("/" , (req , res) => {
    res.send("hello world");
})

