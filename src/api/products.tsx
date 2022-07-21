import instance from "./instance";
import { TypeProducts } from "../type/products";

export const list =() =>{
    const url=`/products`
    return instance.get(url)
}
export const read =(id:any)=>{
    const url= `/products/${id}`
    return instance.get(url)
}
export const remove=(id:any)=>{
    const url=`/products/${id}`
    return instance.delete(url)
}
export const creat=(products:TypeProducts)=>{
    const url=`/products`
    return instance.post(url,products)
}
export const edit =(products:TypeProducts)=>{
    const url= `/products/${products.id}`
    return instance.put(url,products)
}