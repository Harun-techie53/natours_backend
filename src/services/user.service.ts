import UserRoleRepository from "../repositories/user-role.repository.js";
import UserRepository from "../repositories/user.repository.js";
import { UserRoleDto } from "../types/user-role.type.js";
import { IUser, UserCreateDto } from "../types/user.type.js";
import BcryptService from "./bcrypt.service.js";
import logger from "./logger.service.js";

export default class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly bcryptService: BcryptService,
    private readonly userRoleRepo: UserRoleRepository
  ) {}

  public async createUser(payloadData: UserCreateDto): Promise<IUser> {
    const hashedPassword = await this.bcryptService.generateHash(
      payloadData.password
    );
    const user = await this.userRepo.createUser({
      ...payloadData,
      password: hashedPassword,
    });

    return user;
  }

  public async getUsers(): Promise<IUser[]> {
    const users = await this.userRepo.getUsers();

    return users;
  }

  // public async getAllUserRoles(userId: string): Promise<IUser> {
  //   const usersByRoles = await this.userRepo.getUsersByRoles(userId);

  //   return usersByRoles;
  // }

  public async getUser(userId: string): Promise<IUser> {
    const user = await this.userRepo.getUser(userId);

    return user;
  }

  public async setUserRole(payloadData: UserRoleDto): Promise<any> {
    const newUserRole = await this.userRoleRepo.createUserRole(payloadData);

    return newUserRole;
  }
}
