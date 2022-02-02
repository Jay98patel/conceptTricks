export interface Category{
    id: number,
    name: string
}
export interface Product{
    productName:string;
    price:number;
    category:number;
    quantity:number;
    stock:boolean;
    terms:boolean;
}