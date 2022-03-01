import { getRepository, Repository } from 'typeorm';
import { CarImage } from '../infra/typeorm/entities/CarImage';
import { ICarsImagesRepository } from './ICarsImagesRepository';

class CarsImagesRepository implements ICarsImagesRepository {
  private respotory: Repository<CarImage>;

  constructor() {
    this.respotory = getRepository(CarImage);
  }

  async create(car_id: string, image_name: string): Promise<CarImage> {
    const carImage = this.respotory.create({
      car_id,
      image_name,
    });

    await this.respotory.save(carImage);

    return carImage;
  }
}

export { CarsImagesRepository };
