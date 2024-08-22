'use server'

import {apiUrl} from "@/lib/api";
import {Item} from "@/lib/models";

export default async function GetItemById(id: number):Promise<Item>{
    try {
        const response = await fetch(apiUrl + `/item/${id}`);
        if (!response.ok) {
            return {} as Item;
        }

        const json = await response.json();
        const item: Item = {
            id: json.id,
            name: json.name,
            price: json.price,
            images: json.images,
            description: json.description,
            categories: json.categoriesObj
        }
        return item;
    } catch (e) {
        return {} as Item;
    }
}