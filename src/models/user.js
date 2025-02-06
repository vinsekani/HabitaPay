const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      require,
      default:
        "https://res.cloudinary.com/oroko/image/upload/v1737614653/user_pigxco.jpg",
    },
    name: { type: String, require },
    email: { type: String, require },
    phone: { type: String, require },
    password: { type: String, require },
    role: { type: String, required: true, enum: ["landlord", "tenant"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
