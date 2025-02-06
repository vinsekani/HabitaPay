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


        // Assuming req.user contains authenticated landlord data
    const landlordName = req.user?.name || req.body.landlordName;
    const landlordPhone = req.user?.phone || req.body.landlordPhone;

    const tenant = await Tenant.findOne({ phone, uid });
    if (tenant) {
      return res.status(400).json({ message: "Tenant Already Exists" });
    }

    const newTenant = new Tenant({
      name,
      email,
      phone,
      amount,
      paymentStatus,
      dueDate,
      apartmentName,
      houseNumber,
      landlordPhone,
      landlordName,
      uid,
    });

    const savedTenant = await newTenant.save();
    return res.status(201).json(savedTenant);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    const tenants = await Tenant.find({ phone, isDeleted: false }).sort({
      createdAt: -1,
    });
    console.log(phone);
    return res.status(200).json(tenants);
  } catch (error) {
    console.error(error);
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
