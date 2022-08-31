const express = require("express");
const { body } = require("express-validator");

const auth = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", [
  body("firstName").isLength({ min: 3 }).withMessage("Provide correct first name."),
  body("lastName").isLength({ min: 3 }).withMessage("Provide correct last name."),
  body("email").isEmail().withMessage("Provide correct email."),
  body("password").isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  }).withMessage("Provide correct password."),
], auth.register);

router.post("/login", [
  body("email").notEmpty().withMessage("Provide email."),
  body("password").notEmpty().withMessage("Provide password."),
], auth.login);

module.exports = router;
