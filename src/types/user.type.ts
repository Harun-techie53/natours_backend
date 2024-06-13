import { User } from "@prisma/client";

export interface IUser {
  id: string;
  username: string;
  email: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  password?: string;

  user_roles?: any;
}

export type PrismaUserModel = Partial<User> & {
  user_roles?: any;
};

export interface UserLoginDto {
  email: string;
  password: string;
}

export interface UserCreateDto {
  username: string;
  email: string;
  password: string;
}
