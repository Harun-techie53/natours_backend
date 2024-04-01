import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import { authService } from "../services/index.js";
import validate from "../middlewares/validate.js";
import { LoginSchema } from "../validationSchema/auth.schema.js";

const authRouter = Router();

const authController = new AuthController(authService);

authRouter.post("/", validate(LoginSchema), authController.login);

export default authRouter;
