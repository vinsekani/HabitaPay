const User = require("../models/user");
const express = require("express");
const { Router } = express;
const router = Router();
const {  update, login } = require("../controllers/user");
const {signUp} = require("../controllers/user")

router.post("/register", signUp);
router.post("/login", login);
router.patch("/:id", update);

module.exports = router;
