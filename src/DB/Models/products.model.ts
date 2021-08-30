import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Products extends Model {
  @Column
  title: string;

  @Column
  price: number;
  
}