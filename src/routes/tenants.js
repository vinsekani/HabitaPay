const express = require("express");
const Tenant = require("../models/tenants"); 
const {
  addTenant,
  allTenants,
  removeTenant,
  allApartments, 
  editTenant,
} = require("../controllers/tenants");

const router = express.Router();

router.post("/new", addTenant);
router.get("/:uid", allTenants); 
router.get("/phone/:phone", allApartments);
router.delete("/:id", removeTenant);
router.patch("/:id", editTenant);

module.exports = router;
