import { User } from "../../models/users/users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
    console.log(users?.[0]?.username);
  } catch (error) {
    console.error(error);
  }
};
