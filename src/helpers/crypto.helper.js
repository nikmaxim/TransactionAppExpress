const bcrypt = require("bcrypt");

exports.generatePassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

exports.comparePasswords = async (providedPassword, userPassword) => bcrypt
  .compare(providedPassword, userPassword);
