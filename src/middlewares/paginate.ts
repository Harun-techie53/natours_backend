import { NextFunction, Response } from "express";
import { pageLimitToOffset } from "../helpers/utility/index.js";
import { CustomRequest } from "../type-defs/apiResponse.js";

export const paginate = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  let offset = 0;
  let limit = 50000;

  let page: number;

  if (req.query.limit && typeof req.query.limit === "string") {
    limit = ~~req.query.limit;
  }

  if (req.query.page && typeof req.query.page === "string") {
    page = ~~req.query.page;
    offset = page * limit;
  }

  if (offset < 0) {
    offset = 0;
  }
  if (limit <= 0) {
    limit = 10;
  }
  req.pagination = {
    limit,
    offset,
  };
  next();
};
