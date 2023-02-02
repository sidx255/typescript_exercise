let user = {};
export const getUserDetails = async () => {
  return global.db;
};

export const createUser = async (name, email) => {
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

// export default {
//   getUserDetails,
//   createUser
// };