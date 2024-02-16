import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/index.js';
dotenv.config();
const app = express();

const allowedOrigins = ['https://f922-36-85-216-32.ngrok-free.app', 'http://localhost:5173', 'http://localhost:5171', 'http://localhost:3000'];

try {
    await db.authenticate();
    console.log('database connected');
} catch(error) {
    console.error(error);
}

app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(4000, ()=> console.log('Server running at port 4000'));