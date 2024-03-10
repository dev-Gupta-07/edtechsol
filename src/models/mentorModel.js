import mongoose from "mongoose";
const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      trim: true,
      minlength: 8,
    },
    mobileNo: {
      type: Number,
      trim: true,
      minlength: 10,
    },
    highestEducation: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
    },
     categories: {
    type: [String],
  },
  tags: {
    type: [String],
  }
},
  {
    timestamps: true,
  }
);
const Mentor = mongoose.models.mentors || mongoose.model("mentors", mentorSchema);
export default Mentor;