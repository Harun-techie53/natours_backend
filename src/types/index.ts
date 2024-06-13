import { User } from "@prisma/client";
import { Request } from "express";

export interface PaginateResponse<T> {
  data: T[];
  meta: {
    totalItems: number;
    currentPage: number;
    perPage: number;
    totalPages: number;
  };
}

export interface CustomRequest extends Request {
  isAdmin: boolean;
  currentUser: Partial<User>;
  pagination: {
    offset: number;
    limit: number;
  };
}
