const { Schema, Mongoose } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      default: new Mongoose.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: [
        {
            type: Date,
            default: Date.now(),
        },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;