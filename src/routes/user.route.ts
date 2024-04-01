import { Router } from "express";
import validate from "../middlewares/validate.js";
import { UserRoleSchema, UserSchema } from "../validationSchema/user.schema.js";
import UserController from "../controllers/user.controller.js";
import { userService } from "../services/index.js";

const userRouter = Router();

const userController = new UserController(userService);

userRouter.post("/", validate(UserSchema), userController.createUser);
userRouter.get("/", userController.getUsers);
userRouter.post(
  "/set-role",
  validate(UserRoleSchema),
  userController.setUserRole
);

export default userRouter;
