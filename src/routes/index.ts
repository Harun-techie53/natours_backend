import { Router, Request, Response } from "express";
import authRouter from "./auth.route.js";
import userRouter from "./user.route.js";
import { verifyToken } from "../middlewares/auth.js";
import roleRouter from "./role.route.js";

const router = Router();

type RouterType = {
  route: Router;
  path?: string;
  verificationDisabled?: boolean;
};

const defaultRoutes: RouterType[] = [
  {
    path: "/auth",
    route: authRouter,
    verificationDisabled: true,
  },
  {
    path: "/users",
    route: userRouter,
    verificationDisabled: true,
  },
  {
    path: "/roles",
    route: roleRouter,
    verificationDisabled: false,
  },
];

defaultRoutes.forEach((route) => {
  if (route?.path) {
    if (route.verificationDisabled) {
      router.use(route.path, route.route);
    } else {
      router.use(route.path, verifyToken, route.route);
    }
  } else {
    if (route.verificationDisabled) {
      router.use(route.route);
    } else {
      router.use(verifyToken, route.route);
    }
  }
});

export default router;
