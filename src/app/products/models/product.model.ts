export interface Category{
    id: number,
    name: string
}
export interface Product{
    id:number;
    productName:string;
    price:number;
    category:number;
    quantity:number;
    stock:boolean;
    terms:boolean;
}