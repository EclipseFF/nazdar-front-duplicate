'use server'
import {apiUrl} from "@/lib/api";
import {Category, Item} from "@/lib/models";

export default async function GetAllItems(limit: number, offset: number, search?: string, category?: string): Promise<Item[]> {
    try {
        const response = await fetch(apiUrl + '/item?offset=' + offset + '&limit='+limit + (search ? '&search='+search : '') + (category ? '&category='+category : ''));
        const json = await response.json();
        let items: Item[] = [];
        if (Array.isArray(json)) {
            json.forEach((item: any) => {

                const temp: Item = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    images: item.images,
                    description: item.description,
                    categories: item.categoriesObj
                }
                items.push(temp);
            })
        }

        return items;
    } catch (e) {
        return []
    }
}