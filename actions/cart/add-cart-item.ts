'use server'
import {CartItemModel, Category} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function AddCartItem(cartItem: CartItemModel, token:string) {
    const body = {
        token: token,
        item: cartItem
    }
    try {
        const response = await fetch(apiUrl + '/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
    catch (e) {

    }
}