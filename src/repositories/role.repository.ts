import BaseRepository from "./base.repository.js";
import { db, DbType } from "../db.server.js";
import { IRole, RoleDto } from "../types/role.type.js";
import { Role } from "@prisma/client";
import roleResource from "../transformer/role-transformer/role.transformer.js";
import roleCollection from "../transformer/role-transformer/role-collection.js";

export default class RoleRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, "Role");
  }

  public async createRole(payloadData: RoleDto): Promise<IRole> {
    try {
      const newRole = await this.create<IRole, Role>(
        payloadData,
        roleResource.transform
      );
      return newRole;
    } catch (error) {
      throw error;
    }
  }

  public async getRoles(): Promise<IRole[]> {
    try {
      const roles = await this.getAll<IRole, Role>(
        roleCollection.transformCollection
      );
      return roles;
    } catch (error) {
      throw error;
    }
  }

  public async getRole(roleId: string): Promise<IRole> {
    try {
      const role = await this.get<IRole, Role>(roleId, roleResource.transform);
      return role;
    } catch (error) {
      throw error;
    }
  }

  // public async updateRole(roleId: string): Promise<IRole> {
  //   try {
  //     const role = await this.update
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
