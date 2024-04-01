import apiResponse from "../services/apiResponse.service.js";
import UserService from "../services/user.service.js";
import { UserRoleDto } from "../types/user-role.type.js";
import { UserCreateDto } from "../types/user.type.js";
import catchAsync from "../utils/catchAsync.js";
import { Request, Response, NextFunction } from "express";

export default class UserController {
  constructor(private readonly userService: UserService) {}

  public createUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const requestDto = req.body as UserCreateDto;
      const user = await this.userService.createUser(requestDto);

      apiResponse.sendSuccess({
        res,
        data: user,
      });
    }
  );

  public getUsers = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const users = await this.userService.getUsers();

      apiResponse.sendSuccess({
        res,
        data: users,
      });
    }
  );

  public setUserRole = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const payloadDto = req.body as UserRoleDto;
      const newUserRole = await this.userService.setUserRole(payloadDto);

      apiResponse.sendSuccess({
        res,
        data: newUserRole,
      });
    }
  );
}
