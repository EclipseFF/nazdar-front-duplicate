'use server'
import {apiUrl} from "@/lib/api";
import {Item} from "@/lib/models";

export default async function GetAllItems(limit: number, offset: number): Promise<Item[]> {
    try {
        const response = await fetch(apiUrl + '/item?offset=' + offset + '&limit='+limit);
        const json = await response.json();

        let items: Item[] = [];
        json.forEach((item: any) => {
            const temp: Item = {
                id: item.id,
                name: item.name,
                price: item.price,
                images: item.images
            }
            items.push(temp);
        })

        return items;
    } catch (e) {
        console.log(e);
        return []
    }
}