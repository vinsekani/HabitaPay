const Tenant = require("../models/tenants");

const addTenant = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      amount,
      paymentStatus,
      dueDate,
      apartmentName,
      houseNumber,
      uid,
    } = req.body;
    const tenant = await Tenant.findOne({ phone, uid });
    console.log(tenant);
    if (tenant) {
      return res.status(400).json({ message: "Tenant Already Exists" });
    } else {
      const newTenant = new Tenant({
        name,
        email,
        phone,
        amount,
        paymentStatus,
        dueDate,
        apartmentName,
        houseNumber,
        uid,
      });
      const savedTenant = await newTenant.save();
      return res.status(201).json(savedTenant);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const allTenants = async (req, res) => {
  try {
    const { uid } = req.params;
    const tenant = await Tenant.find({ uid, isDeleted: false }).sort({
      createdAt: -1,
    });
    return res.status(200).json(tenant);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const allApartments = async (req, res) => {
  try {
    const { phone } = req.params;
    const tenant = await Tenant.find({ phone, isDeleted: false }).sort({
      createdAt: -1,
    });
    return res.status(200).json(tenant);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const removeTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const tenant = await Tenant.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );
    return res.status(200).json(tenant);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const editTenant = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const tenant = await Tenant.findByIdAndUpdate(id, update, { new: true });
    return res.status(200).json(tenant);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  addTenant,
  allTenants,
  removeTenant,
  editTenant,
  allApartments,
};
