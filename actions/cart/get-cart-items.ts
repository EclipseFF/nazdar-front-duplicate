import {CartItemModel, Category} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function GetCartItems(cartitems: CartItemModel): Promise<CartItemModel> {
    const response = await fetch(apiUrl + '/cart')
    const json = await response.json();
    let cartItem: CartItemModel[] = [];

    if (Array.isArray(json)) {
        json.forEach((cartItem) => {
            const temp: CartItemModel = {
                id: cartItem.id,
                name: cartItem.name,
                price: cartItem.price,
                quantity: cartItem.quantity,
                image: cartItem.image
            }
            cartItem.push(temp);
        })
    }


    return cartitems

}