"use server"

import {Category} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function CreateCategory(category: Category): Promise<Category> {

    try {
        const response = await fetch(apiUrl + '/category', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(category)
        });
        const json = await response.json();
        console.log(json)
        const Category: Category = {
            id: json.category.id,
            name: json.category.name
        }
        return Category
    } catch (e) {
        return {} as Category
    }

}