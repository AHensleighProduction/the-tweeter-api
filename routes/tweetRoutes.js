import express from 'express';
import {
  getTweets,
  postTweet,
  addComment,
  addLike
} from '../controllers/tweetController.js';
const router = express.Router();

router.route('/')
  .get(getTweets)
  .post(postTweet);
router.route('/comments/:id')
  .put(addComment)
router.route('/likes/:id')
  .put(addLike);


export default router;
