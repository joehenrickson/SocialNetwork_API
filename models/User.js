const { Schema, model } = require('mongoose');

const user = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: 'Email address is required',
      unique: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
