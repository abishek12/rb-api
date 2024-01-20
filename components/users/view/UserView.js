import Express from "express";
import UserController from "../controller/UserController.js";

const userRoutes = Express.Router();

userRoutes.get("/", UserController.fetchUsers);
userRoutes.get("/:userId", UserController.fetchUser);
userRoutes.post("/", UserController.searchUser);
userRoutes.delete("/", UserController.deleteUser);

export default userRoutes;