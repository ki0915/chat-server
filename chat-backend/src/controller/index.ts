import express from "express";
import userController from "./user.controller";
import friendController from "./friend.controller";
import loginController from "./login.controller";
import session from "express-session";

const router = express.Router();

router.use(session({
    secret: "비밀키",
    resave: false,
    saveUninitialized: false,
}));
router.use("/login", loginController);
router.use("/users", userController);
router.use("/friends", friendController);

export default router;
