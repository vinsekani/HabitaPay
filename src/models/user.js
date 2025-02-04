const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    phone: { type: String, require },
    password: { type: String, require },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
