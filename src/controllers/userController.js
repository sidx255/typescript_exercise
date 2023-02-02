
const userDetails = require("../services/userDetails");

const getUserDetails = async (req, res) => {
  console.log("GET /users DETAILS");
  res.json(await userDetails.getUserDetails());
};
    
const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await userDetails.createUser(name, email);
  res.status(201).json(user);
};

module.exports = {
  getUserDetails,
  createUser,
};