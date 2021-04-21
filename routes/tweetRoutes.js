import express from 'express';
import {
  getTweets,
  postTweet,
  addComment,
  addLike,
  deleteTweet,
  deleteComment,
  removeLike
} from '../controllers/tweetController.js';
const router = express.Router();

router.route('/')
  .get(getTweets)
  .post(postTweet);
router.route(':/id')
  .delete(deleteTweet);
router.route('/comments/:id')
  .put(addComment)
router.route('/likes/:id')
  .put(addLike);
router.route('/comments/:tweetId/:commentId')
  .delete(deleteComment);
router.route('/likes/:id')
  .delete(removeLike);


export default router;
