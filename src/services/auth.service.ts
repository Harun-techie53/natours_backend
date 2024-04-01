import httpStatus from "http-status";
import { UserLoginDto } from "../types/user.type.js";
import ApiError from "../utils/ApiError.js";
import BcryptService from "./bcrypt.service.js";
import TokenServices from "./token.service.js";
import UserRepository from "../repositories/user.repository.js";
// import UserRepository from '../repository/user.repository';
export default class AuthService {
  constructor(
    private tokenService: TokenServices,
    private userRepo: UserRepository,
    private bcryptService: BcryptService
  ) {}

  public async login(
    payload: UserLoginDto
  ): Promise<{ token: string; expiresIn: number }> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.userRepo.findByEmail(payload.email);
        if (!user) {
          throw new ApiError(httpStatus.NOT_FOUND, "User Not Exists");
        }

        const isPasswordMatched = await this.bcryptService.compareHash(
          payload.password,
          user.password
        );

        if (!isPasswordMatched) {
          throw new ApiError(
            httpStatus.UNAUTHORIZED,
            "Password Does not Matched"
          );
        }
        const expiresIn = new Date(
          Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10
        ).getTime();
        const token = await this.tokenService.generateToken({
          payload: {
            userId: user.id,
          },
          expiresIn,
        });
        resolve({ token, expiresIn });
      } catch (error) {
        reject(error);
      }
    });
  }
}
