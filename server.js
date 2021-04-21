import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import tweetRoutes from './routes/tweetRoutes.js';
import colors from 'colors';
import path from 'path';
import fs from 'fs';

dotenv.config();
connectDB();

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);
const PORT = process.env.PORT || 8080;
const app = express()
app.use(express.json());
app.use(cors());

app.use('/tweets', tweetRoutes);

app.get('/', (req, res) => {
  res.send(`Welcome to The Tweeter API! Go to https://github.com/ingridclaire/the-tweeter-api/blob/master/README.md for documentation on using this API`)
})

app.listen(PORT, console.log(`server running on port ${PORT}`.bold.yellow));


