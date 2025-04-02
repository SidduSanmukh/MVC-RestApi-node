import mongoose from "mongoose";

async function DBconnection(connString) {
  await mongoose
    .connect(connString)
    .then(() => {
      console.log("Database connected!");
    })
    .catch(() => {
      console.log("Database is not connected");
    });
}

export default DBconnection;
