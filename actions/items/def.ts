'use server'
import {apiUrl} from "@/lib/api";
import {CartItemModel, Item} from "@/lib/models";

export default async function GetCartItems(): Promise<CartItemModel[]> {
    try {
        const response = await fetch(apiUrl + '/test/cart');
        const json = await response.json();

        let items: CartItemModel[] = [];
        json.forEach((cartitem: any) => {
            const temp: CartItemModel = {
                id: cartitem.id,
                name: cartitem.name,
                quantity: cartitem.quantity,
                price: cartitem.price,
                image: cartitem.image
            }
            items.push(temp);
        })

        return items;
    } catch (e) {
        console.log(e);
        return []
    }
}