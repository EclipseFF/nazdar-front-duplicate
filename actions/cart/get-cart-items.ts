'use server'
import {apiUrl} from "@/lib/api";
import {CartItemModel, Item} from "@/lib/models";

export default async function GetCartItems(token?: string): Promise<CartItemModel[]> {
    try {
        const response = await fetch(apiUrl + '/cart/' + token);
        const json = await response.json();
        let items: CartItemModel[] = [];
        json.forEach((cartitem: any) => {
            console.log(cartitem)
            const temp: CartItemModel = {
                id: cartitem.id,
                name: cartitem.name,
                quantity: cartitem.count,
                price: cartitem.price,
                image: cartitem.images[0]
            }

            items.push(temp);
        })
        return items;
    } catch (e) {

        return []
    }
}