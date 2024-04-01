import { IUser, PrismaUserModel } from "../../types/user.type.js";
import { Transformer } from "../transformer.js";

class UserResource implements Transformer {
  transform(transformerDataInput: PrismaUserModel): IUser {
    return {
      id: transformerDataInput.id,
      email: transformerDataInput.email,
      username: transformerDataInput.username,
    };
  }
}

const userResource = new UserResource();
export default userResource;
