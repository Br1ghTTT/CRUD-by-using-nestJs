import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/DB/database.module";
import { productsProviders } from "src/shared/providers/products.providers";
import { ProductsController } from "./product-controller/products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports:[DatabaseModule],
    providers:[
        ProductsService,
        ...productsProviders
    ],
    controllers:[ProductsController]
})

export class ProductModule {
}