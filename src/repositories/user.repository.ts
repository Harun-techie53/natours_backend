import BaseRepository from "./base.repository.js";
import { db, DbType } from "../db.server.js";
import { User } from "@prisma/client";
import { IUser, UserCreateDto } from "../types/user.type.js";
import userResource from "../transformer/user-transformer/user.resource.js";
import userCollection from "../transformer/user-transformer/user.collection.js";

export default class UserRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, "User");
  }

  public async createUser(payloadData: UserCreateDto): Promise<IUser> {
    try {
      const newUser = await this.create<IUser, User>(
        payloadData,
        userResource.transform
      );
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  public async getUser(userId: string): Promise<IUser> {
    try {
      const user = await this.get(userId, userResource.transform);

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async getUsers(): Promise<IUser[]> {
    try {
      const users = await this.getAll<IUser, User>(
        userCollection.transformCollection
      );
      return users;
    } catch (error) {
      throw error;
    }
  }

  // public async getUsersByRoles(userId: string): Promise<IUser> {
  //   try {
  //     const usersByRoles = await this.get<>(userId, userResource.transform, {
  //       include: { user_roles: true },
  //     });

  //     return usersByRoles;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  public async findByEmail(paylodEmail: string): Promise<User | null> {
    try {
      const user = await db.user.findUnique({
        where: {
          email: paylodEmail,
        },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
