import express from "express";
import userController from "./user.controller";
import friendController from "./friend.controller";
import loginController from "./login.controller";
import chatController from "./chat.controller"

const router = express.Router();

router.use("/login", loginController);
router.use("/users", userController);
router.use("/friends", friendController);
router.use("/chats", chatController);

export default router;
