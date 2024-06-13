import { Tour } from "@prisma/client";
import { db, DbType } from "../db.server.js";
import { ITour, TourDto } from "../types/tour.types.js";
import BaseRepository from "./base.repository.js";
import tourResource from "../transformer/tour-transformer/tour.resource.js";

export default class TourRepository extends BaseRepository<DbType> {
  constructor() {
    super(db, "Tour");
  }

  public async createTour(payloadDto: TourDto): Promise<ITour> {
    const newTour = await this.create<ITour, Tour>(
      { ...payloadDto },
      tourResource.transform
    );

    return newTour;
  }
}
