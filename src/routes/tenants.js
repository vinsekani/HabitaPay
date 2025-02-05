const express = require("express");
const { modal } = require("mongoose");
const tenant = require("../models/tenants");
const Tenant = require("../models/tenants");
const {
  addTenant,
  allTenants,
  removeTenant,
  editTenant,
} = require("../controllers/tenants");

const { Router } = express;
const router = Router();

router.post("/new", addTenant);

router.get("/:uid", allTenants);

router.delete("/:id", removeTenant);

router.patch("/:id", editTenant);

module.exports = router;
