import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";
import apiResponse from "../services/apiResponse.service.js";
import logger from "../services/logger.service.js";
import TokenServices from "../services/token.service.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";
import { userService } from "../services/index.js";
import { CustomRequest } from "../types/index.js";

export const verifyToken = catchAsync(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const bearer = req.header("Authorization") || "";
    const token = bearer.split(" ")[1];

    const authData: any = await new TokenServices().verifyToken(token);
    if (!authData?.userId) {
      return apiResponse.sendError({
        res,
        message: "Please Authenticate",
        code: httpStatus.UNAUTHORIZED,
      });
    }
    const currentUser = await userService.getUser(authData.userId);

    if (!currentUser) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "User Not Found");
    }
    currentUser.password = "";
    req.currentUser = currentUser;

    next();
  }
);

export const restrictTo = ([...roles]) =>
  catchAsync(async (req: CustomRequest, res: Response, next: NextFunction) => {
    const currentUser = req.currentUser;

    const { roles: currentUserRoles } = currentUser;

    const currentUserRoleNames = currentUserRoles.map((role) => role.role_name);

    if (
      !currentUserRoleNames ||
      !currentUserRoleNames.some((userRole) => roles.includes(userRole))
    ) {
      throw new ApiError(httpStatus.FORBIDDEN, "Operation Denied!");
    }

    if (
      !!currentUserRoleNames &&
      currentUserRoleNames.some((userRole) =>
        [UserRoles.Pro_Manager, UserRoles.System].includes(userRole)
      )
    ) {
      req.isAdmin = true;
    }

    next();
  });
