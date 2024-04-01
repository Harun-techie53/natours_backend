import { NextFunction, Response, Request } from "express";
import AuthService from "../services/auth.service.js";
import catchAsync from "../utils/catchAsync.js";
import { UserLoginDto } from "../types/user.type.js";
import apiResponse from "../services/apiResponse.service.js";

export default class AuthController {
  constructor(protected readonly authService: AuthService) {}

  public login = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const requestDto = req.body as UserLoginDto;
      const { token, expiresIn } = await this.authService.login(requestDto);
      apiResponse.sendSuccess({
        res,
        code: 200,
        data: {
          token: token,
          expiresIn,
        },
      });
    }
  );
}
