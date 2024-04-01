import { db, DbType } from "../db.server.js";
import userRoleResource from "../transformer/user-role-transformer/user-role.resource.js";
import {
  IUserRole,
  PrismaUserRoleModel,
  UserRoleDto,
} from "../types/user-role.type.js";
import BaseRepository from "./base.repository.js";

export default class UserRoleRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, "User_Role");
  }

  public async createUserRole(payloadData: UserRoleDto): Promise<IUserRole> {
    try {
      const newUserRole = await this.create<IUserRole, PrismaUserRoleModel>(
        payloadData,
        userRoleResource.transform
      );
      return newUserRole;
    } catch (error) {
      throw error;
    }
  }
}
