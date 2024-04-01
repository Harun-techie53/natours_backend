import { IRole, PrismaRoleModel } from "../../types/role.type.js";
import { Transformer } from "../transformer.js";

class RoleResource implements Transformer {
  transform(transformerDataInput: PrismaRoleModel): IRole {
    return {
      id: transformerDataInput.id,
      name: transformerDataInput.name,
      description: transformerDataInput.description
        ? transformerDataInput.description
        : "",
    };
  }
}

const roleResource = new RoleResource();

export default roleResource;
