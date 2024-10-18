import { User } from "../../models/users/users.js";

export const getUsers = (req, res) => {
  const users = User.find({}).then((response) => response.json());
  res.send(users);
  console.log(users);
  
};
