
import * as userService from "../services/userDetails.js";

export const getUserDetails = async (req, res) => {
  console.log("GET /users DETAILS");
  res.json(await userService.getUserDetails());
};
    
export const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  res.status(201).json(user);
};

// export default {
//   getUserDetails,
//   createUser,
// };