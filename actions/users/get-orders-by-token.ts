'use server'

import {apiUrl} from "@/lib/api";
import {CartItemModel} from "@/lib/models";

export async function GetOrdersByToken(token: string): Promise<CartItemModel[]> {
    try {
        const response = await fetch(`${apiUrl}/orders/token/` + token);
        if (!response.ok) {
            return [];
        }
        const json = await response.json();

        const cartItems: CartItemModel[] = json.map((item: any) => ({
            id: item.id,
            name: item.itemName,
            price: item.price,
            quantity: item.quantity,
            image: item.imageUrl
        }));

        return cartItems;
    } catch (e) {
        return [];
    }

}