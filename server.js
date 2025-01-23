import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDB } from './config/db.js'; // Import as a named export
import studentRouter from './routes/students.js';

const app = express();
app.use(express.json());
app.use('/api/students', studentRouter);
connectDB();
app.listen(process.env.PORT || 5001, () => {
    console.log(`Server Running on port: $ {process.env.PORT}`);
});