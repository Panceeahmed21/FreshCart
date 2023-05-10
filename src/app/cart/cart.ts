
export interface Cart {
    numOfCartItems:number,
    data:Data


}
interface Data{
    products:Products[],
    totalCartPrice:number,
    _id:string
}
interface Products{
    count:number,
    price:number,
    product:ProductDetails
}
interface ProductDetails{
    imageCover:string,
    id:string,
    title:string
}