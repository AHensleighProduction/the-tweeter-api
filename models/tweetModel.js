import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const tweetSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  comments: [commentSchema],
  likes: {
    type: Number,
    required: false,
    default: 0
  }
}, {
  timestamps: true
})

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;

