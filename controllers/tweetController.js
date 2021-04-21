import Tweet from '../models/tweetModel.js';
import asyncHandler from 'express-async-handler';

export const postTweet = asyncHandler (async (req, res) => {
  const { username, message, photoUrl } = req.body;
  const tweet = new Tweet({
    username,
    message,
    photoUrl: photoUrl || ''
  });
  const createdTweet = await tweet.save();
  res.status(201).json(createdTweet);
})

export const getTweets = asyncHandler (async (req, res) => {
  const tweets = await Tweet.find({});
  res.json(tweets);
})

export const addComment = asyncHandler (async (req, res) => {
  const { comment, username } = req.body;
  const tweet = await Tweet.findById(req.params.id);

  if (tweet) {
    const newComment = {
      username,
      comment
    };
  
    tweet.comments.push(newComment);
    await tweet.save();
    res.status(201).json({ message: 'Comment added'});
  } else {
    res.status(404);
    throw new Error('Tweet not found');
  }
})

export const addLike = asyncHandler (async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  if (tweet) {
    tweet.likes += 1;
    await tweet.save();
    res.status(201).json({ message: 'liked Tweet'});
  } else {
    res.status(404);
    throw new Error('Tweet not found');
  }
})

export const deleteTweet = asyncHandler (async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);
  if (tweet) {
    await tweet.remove()
    res.json({ message: 'Tweet removed' })
  } else {
    res.status(404)
    throw new Error('Tweet not found')
  }
})