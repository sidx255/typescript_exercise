let user = {};
const getUserDetails = async () => {
  return global.db;
};

const createUser = async (name, email) => {
  console.log("POST /tasks/ service is called");
  user = {
    id: global.id,
    name: name,
    email: email
  };
  global.id += 1;
  global.db.push(user);
  return user;
};

module.exports = {
  getUserDetails,
  createUser
};