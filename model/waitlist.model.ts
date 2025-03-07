import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema); 