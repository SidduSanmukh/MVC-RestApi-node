import express from "express";
import DBconnection from "./db.connection.js";
import router from "./routes/user.js";
const app = express();
const PORT = 2000;

DBconnection("Connection String");

//Middleware
app.use(express.urlencoded({ extended: true }));

//Router for the /api/users path
app.use("/api/users", router);

app.listen(PORT, () => {
  console.log(`Srever is running at port ${PORT}`);
});
