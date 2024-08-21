'use server'

import {Category} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function GetAllCategories(): Promise<Category[]> {
    try {
        const response = await fetch(apiUrl + '/category')
        const json = await response.json();
        let categories: Category[] = [];

        if (Array.isArray(json)) {
            json.forEach((category: any) => {
                const temp: Category = {
                    id: category.id,
                    name: category.name
                }
                categories.push(temp);
            })
        }


        return categories
    } catch (e) {
        return []
    }
}