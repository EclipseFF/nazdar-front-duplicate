'use server'

import {apiUrl} from "@/lib/api";
import {CartItemModel} from "@/lib/models";

export async function GetOrdersByToken(token: string): Promise<CartItemModel[]> {
    console.log(token)
    try {
        const response = await fetch(`${apiUrl}/user/orders/` + token);
        if (!response.ok) {
            return [];
        }
        const json = await response.json();
        console.log(json)
        const cartItems: CartItemModel[] = json.map((item: any) => ({
            id: item.id,
            name: item.itemName,
            price: item.price,
            quantity: item.quantity,
            image: item.imageUrl
        }));

        return cartItems;
    } catch (e) {
        console.log(e)
        return [];
    }

}