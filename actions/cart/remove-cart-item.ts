'use server'

import {apiUrl} from "@/lib/api";

export default async function RemoveCartItem(token: string, itemId: number) {
    console.log(token, itemId)
    const body = {
        token: token,
        itemId: itemId
    }
    try {
        const response = await fetch(apiUrl + '/cart/remove', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    } catch (e) {
        console.log(e)
    }
}