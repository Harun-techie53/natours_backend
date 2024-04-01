import apiResponse from "../services/apiResponse.service.js";
import RoleService from "../services/role.service.js";
import { RoleDto } from "../types/role.type.js";
import catchAsync from "../utils/catchAsync.js";
import { Request, Response, NextFunction } from "express";

export default class RoleController {
  constructor(private readonly roleService: RoleService) {}

  public createRole = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const requestDto = req.body as RoleDto;

      const role = await this.roleService.createRole(requestDto);

      apiResponse.sendSuccess({
        res,
        data: role,
      });
    }
  );

  public getRoles = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const roles = await this.roleService.getRoles();

      apiResponse.sendSuccess({
        res,
        data: roles,
      });
    }
  );

  public getRole = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
      const { roleId } = req.params;
      const role = await this.roleService.getRole(roleId);

      apiResponse.sendSuccess({
        res,
        data: role,
      });
    }
  );
}
