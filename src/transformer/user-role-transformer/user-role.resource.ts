import { IUserRole, PrismaUserRoleModel } from "../../types/user-role.type.js";
import { Transformer } from "../transformer.js";

class UserRoleResource implements Transformer {
  transform(transformerDataInput: PrismaUserRoleModel): IUserRole {
    return {
      role_id: transformerDataInput.role_id,
      user_id: transformerDataInput.user_id,
    };
  }
}

const userRoleResource = new UserRoleResource();
export default userRoleResource;
