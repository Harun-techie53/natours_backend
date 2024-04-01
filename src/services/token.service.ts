import jwt from "jsonwebtoken";
import getSecretKey from "../configs/jwt-config.js";

interface IgenerateToken {
  payload: Object;
  expiresIn: number;
}
export default class TokenServices {
  public async generateToken({
    payload,
    expiresIn,
  }: IgenerateToken): Promise<string> {
    try {
      return jwt.sign(payload, getSecretKey(), {
        expiresIn: expiresIn,
      });
    } catch (err) {
      throw err;
    }
  }
  public async verifyToken(token: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = jwt.verify(token, getSecretKey());
        resolve(data);
      } catch (error) {
        resolve(null);
      }
    });
  }
}
