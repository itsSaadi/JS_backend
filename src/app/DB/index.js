import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}/e-comm`);
    console.log("DB_Connected.......");
  } catch (error) {
    console.log(error);
  }
};
