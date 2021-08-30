export class CreateProductDto {
    readonly title: string;  // readonly: if  we won't change this title otherwise just title
    readonly price: number;
}