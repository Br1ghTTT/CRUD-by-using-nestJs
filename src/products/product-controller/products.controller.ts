import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Header , 
    HttpCode, 
    HttpStatus, 
    Param, 
    Post, 
    Put, 
    Redirect,
 } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductsService } from '../products.service';

@Controller('products')
export class ProductsController {
    
    constructor(private readonly productService: ProductsService){
    }


    @Get()
    // @Redirect('https://google.com', 301) // creating redirect
    getAll(): any {
        return this.productService.getAll();
    }

    @Get(':id') 
    // similar method
    // getOne(@Param('') params){ 
    // return 'getOne' + params.id;
    // }
        getOne(@Param('id') id){
        return this.productService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED) // adding status co
    @Header('Cache-Control', 'none') // adding header for request
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id): any{
        return this.productService.remove(id);
    }

    @Put(':id')
    edit(@Body() updateProductDto: UpdateProductDto, @Param('id') id: any) {
        console.log(updateProductDto.price);
        return this.productService.edit(id, updateProductDto);
    }
}
