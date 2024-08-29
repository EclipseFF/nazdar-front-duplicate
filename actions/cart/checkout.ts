'use server'

import {CartItemModel} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function Checkout(items: CartItemModel[], token?: string) {
    if (!token) {
        return
    }
    try {
        const response = await fetch(apiUrl + '/cart/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token,
                items: items
            })
        })
    } catch (e) {
        console.log(e)
    }
}