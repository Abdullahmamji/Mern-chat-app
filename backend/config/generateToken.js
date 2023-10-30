const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "jimmy", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
