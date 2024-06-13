import { ITour, PrismaTourModel } from "../../types/tour.types.js";
import { Transformer } from "../transformer.js";

class TourResource implements Transformer {
  transform(transformerDataInput: PrismaTourModel): ITour {
    return {
      id: transformerDataInput.id,
      name: transformerDataInput.name,
      difficulty: transformerDataInput.difficulty,
      duration: transformerDataInput.duration,
      price: transformerDataInput.price,
      image_cover: transformerDataInput.image_cover
        ? transformerDataInput.image_cover
        : "",
      maxGroupSize: transformerDataInput.maxGroupSize,
      start_date: transformerDataInput.start_date,
    };
  }
}

const tourResource = new TourResource();

export default tourResource;
