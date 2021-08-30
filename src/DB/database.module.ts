import { Module } from '@nestjs/common';
import { dataBaseProviders } from '../shared/providers/database.providers';

@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class DatabaseModule {}