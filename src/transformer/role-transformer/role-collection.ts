import { IRole, PrismaRoleModel } from "../../types/role.type.js";
import { CollectionTransformer } from "../transformer.js";

class RoleCollection implements CollectionTransformer {
  transformCollection(transformerDataInput: PrismaRoleModel[]): IRole[] {
    return transformerDataInput.map((transformerData) => ({
      id: transformerData.id,
      name: transformerData.name,
      description: transformerData.description
        ? transformerData.description
        : "",
    }));
  }
}

const roleCollection = new RoleCollection();

export default roleCollection;
