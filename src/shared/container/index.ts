import { container } from 'tsyringe';

import CategoriesRepository from '../../modules/cars/repositories/implementations/CategoriesRepository';
import SpecificationsRepository from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
