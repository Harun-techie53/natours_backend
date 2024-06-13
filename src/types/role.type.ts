import { Role } from "@prisma/client";

export interface RoleDto {
  name: string;
  description?: string;
}

export interface IRole {
  id: string;
  name: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
}

export type PrismaRoleModel = Partial<Role>;
