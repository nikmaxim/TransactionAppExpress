const jwt = require("jsonwebtoken");

exports.generateAccessToken = (email) => {
  try {
    const token = jwt.sign({ name: email }, process.env.token_secret, { expiresIn: "2h" });
    return token;
  } catch (e) {
    return { succeeded: false, message: "Error occurred while generated token." };
  }
};
