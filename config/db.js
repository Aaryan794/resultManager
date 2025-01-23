import 'dotenv/config';
import mongoose from 'mongoose';

export const connectDB = () => { // Export as a named export
    const MONGO_URL = process.env.MONGO_URL;
    console.log('MONGO_URL:', MONGO_URL);

    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('Error connecting to the database:', err);
    });

    db.once('open', () => {
        console.log('Database connected successfully');
    });
};