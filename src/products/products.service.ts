import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Products } from '../DB/Models/products.model';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @Inject('PRODUCTS_REPOSITORY')
        private productModule: typeof Products
        
        ){}
        // private products = [];

    async getAll(): Promise<Products[]> {
        return this.productModule.findAll();
    }

    async getById(id: string): Promise<Products> {
        return this.productModule.findByPk(id)
    }

    async create(productDto: CreateProductDto): Promise<Products> {
        const newProduct = new this.productModule(productDto); 
        return newProduct.save();
    }

    async remove(id: string) {
        return await this.productModule.destroy( {
            where: {
                id: id
            }
        });
    }

    async edit(id: any, productDto: UpdateProductDto){  
        const prod = await this.productModule.findByPk(id);
        prod.title = productDto.title;
        prod.price = productDto.price;
        return await prod.save();
    }   

}
