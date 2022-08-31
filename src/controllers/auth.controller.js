const { validationResult } = require("express-validator");
const userDb = require("../database/user.db");
const cryptoHelper = require("../helpers/crypto.helper");
const authService = require("../services/auth/authentication.service");

exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const password = await cryptoHelper.generatePassword(req.body.password);
  req.body.password = password;

  const result = await userDb.create(req.body);
  if (!result.succeeded) return next(result.message);

  return res.status(201).send("User was created.");
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const result = await userDb.findOne(req.body.email);
  if (!result.succeeded) return next("Incorrect email or password.");

  const passwordResult = await cryptoHelper
    .comparePasswords(req.body.password, result.model.password);

  if (!passwordResult) return next.send("Incorrect email or password");

  const token = await authService.generateAccessToken(req.body.email);

  return res.status(201).send(token);
};
