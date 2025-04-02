import express from "express";
import { Router } from "express";
import userModule from "../models/user.js";

const router = Router();

// router.get("/", (req, res) => {
//   return res.json("Siddarooda swamiji Maharaj ki jai.");
// });

router.get("/", async (req, res) => {
  const users = await userModule.find({});
  return res.json(users);
});

router.post("/", async (req, res) => {
  const body = await req.body;
  userModule
    .create({
      name: body.name,
      lastName: body.name,
    })
    .then(() => {
      return res.status(200).json({ status: "User Created" });
    })
    .catch(() => {
      return res.status(400).json({ status: "user Not created" });
    });
});

router.patch("/:id", async (req, res) => {
  const id = await userModule.findByIdAndUpdate(req.params.id, {
    name: "GurunathaAarudha",
  });

  return res.status(202).json({ status: "User Updated" });
});

router.delete("/:id", async (req, res) => {
  const id = await userModule.findByIdAndDelete(req.params.id);
  return res.status(200).json({ status: "user deleted " });
});

export default router;
