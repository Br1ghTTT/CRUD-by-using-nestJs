import { Products } from '../../DB/Models/products.model';

export const productsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Products,
  },
];