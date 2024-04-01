import RoleRepository from "../repositories/role.repository.js";
import { IRole, RoleDto } from "../types/role.type.js";

export default class RoleService {
  constructor(private readonly roleRepo: RoleRepository) {}

  public async createRole(payloadData: RoleDto): Promise<IRole> {
    const role = await this.roleRepo.createRole(payloadData);

    return role;
  }

  public async getRoles(): Promise<IRole[]> {
    const roles = await this.roleRepo.getRoles();

    return roles;
  }

  public async getRole(roleId: string): Promise<IRole> {
    const role = await this.roleRepo.getRole(roleId);

    return role;
  }
}
