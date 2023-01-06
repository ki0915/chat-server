import express, { request } from "express";
import User from "../model/user.model";


const router = express.Router();

router.post("/", async (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    if(!id && !password)
    {
        return res.status(400).json({
            message: "잘못된 사용자의 요청입니다.",
        });
    }

    const existUser = await User.findOne({
        where: {
          id: id,
          password: password,
        },
      });

      if (existUser) {
        return res.status(200).json();
      }
   
    else if (!existUser) {
      return res.status(400).json();
  }
});


export default router;