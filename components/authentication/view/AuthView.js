import Express from "express";
import AuthController from "../controller/AuthController.js";

const authRoutes = Express.Router();

authRoutes.post("/sign-in", AuthController.signIn);
authRoutes.post("/sign-up", AuthController.signUp);
authRoutes.put("/password-reset", AuthController.passwordReset);

export default authRoutes;