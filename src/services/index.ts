import RoleRepository from "../repositories/role.repository.js";
import UserRoleRepository from "../repositories/user-role.repository.js";
import UserRepository from "../repositories/user.repository.js";
import AuthService from "./auth.service.js";
import BcryptService from "./bcrypt.service.js";
import RoleService from "./role.service.js";
import TokenServices from "./token.service.js";
import UserService from "./user.service.js";

export const authService = new AuthService(
  new TokenServices(),
  new UserRepository(),
  new BcryptService()
);

export const userService = new UserService(
  new UserRepository(),
  new BcryptService(),
  new UserRoleRepository
);

export const roleService = new RoleService(new RoleRepository());
