'use server'
import {CartItemModel, Category} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function AddCartItem(cartItem: CartItemModel, token:string): Promise<CartItemModel> {

    try {
        if(cartItem.quantity < 1){
            return {} as CartItemModel
        }
        const response = await fetch(apiUrl + '/cart', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(cartItem)
        });
        const json = await response.json();
        console.log(json)
        const CartItem: CartItemModel = {
            id: json.category.id,
            name: json.category.name,
            price: json.category.price,
            quantity: json.category.quantity,
            image: json.category.image
        }
        return CartItem
    } catch (e) {
        console.log(e);
        return {} as CartItemModel
    }
}