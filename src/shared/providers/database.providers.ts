import { Sequelize } from 'sequelize-typescript';
import { Products } from '../../DB/Models/products.model';

export const dataBaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345code22-105',
        database: 'nest-js-first-app',
      });
      sequelize.addModels([Products]);
      await sequelize.sync();
      return sequelize;
    },
  },
];