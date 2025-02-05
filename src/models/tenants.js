const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    phone: { type: String, require },
    amount: { type: String, require },
    paymentStatus: { type: String, require },
    dueDate: { type: String, require },
    apartmentName: { type: String, require },
    houseNumber: { type: String, require },
    isDeleted: { type: Boolean, default: false },
    uid: { type: String, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tenant", tenantSchema);
