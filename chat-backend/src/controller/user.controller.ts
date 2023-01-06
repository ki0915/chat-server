import express from "express";
import User from "../model/user.model";



const router = express.Router();

router.post("/add", async (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json();
  }


  const existUser = await User.findOne({
    where: {
      id: id,
      password: password,
    },
  });

  if (existUser) {
    return res.status(404).json();
  }

  else {
  const newUser = await User.create({
    id,
    password,
  });

    return res.status(201).json({
    userId: newUser.id,
  });
}
});

router.get("/", async (req, res) => {
  const users: User[] = await User.findAll();
  return res.status(200).json(users);
});


router.get("/myId", async (req, res) => {
  const userId = req.session.id;
  return res.status(200).json(userId);
});

export default router;
