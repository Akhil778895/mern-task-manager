const express = require('express');
const router = express.Router();
const { home, register, login } = require("../controllers/controller")
const validate = require("../middleware/validate-middleware");
const signUpSchema = require("../Validators/auth-validator");
 
router.route("/").get(home);
router.route("/register").post(validate(signUpSchema), register);
router.route("/login").post(login)

module.exports = router;