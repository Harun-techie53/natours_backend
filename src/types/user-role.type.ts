import { User_Role } from "@prisma/client";

export interface UserRoleDto {
  role_id: string;
  user_id: string;
}

export type PrismaUserRoleModel = User_Role;

export interface IUserRole {
  role_id: string;
  user_id: string;
}
