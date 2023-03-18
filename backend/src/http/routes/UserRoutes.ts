import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/create", userController.create);
userRoutes.post("/forgot", userController.forgot);
userRoutes.post("/verify-code/:id", userController.verifyCode);
userRoutes.post("/:id/reset-password", userController.resetPassword);

export default userRoutes;