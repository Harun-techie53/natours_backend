import { IUser, PrismaUserModel } from "../../types/user.type.js";
import { CollectionTransformer, Transformer } from "../transformer.js";

class UserCollection implements CollectionTransformer {
  transformCollection(transformerDataInput: PrismaUserModel[]): IUser[] {
    return transformerDataInput.map((transformerData) => ({
      id: transformerData.id,
      email: transformerData.email,
      username: transformerData.username,
    }));
  }
}

const userCollection = new UserCollection();
export default userCollection;
