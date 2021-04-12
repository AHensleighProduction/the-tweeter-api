import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import tweetRoutes from './routes/tweetRoutes.js';
import colors from 'colors';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080;
const app = express()
app.use(express.json());
app.use(cors());

app.use('/tweets', tweetRoutes);

app.get('/', (req, res) => {
  res.send(`Tweeter API is running...
  Send GET and POST requests to /tweets`)
})

app.listen(PORT, console.log(`server running on port ${PORT}`.bold.yellow));


