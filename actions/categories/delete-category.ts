import {Category} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default async function DeleteCategory(category: Category){
    try {
        await fetch(apiUrl + `/category/${category.id}`, {
            method: "DELETE",
        });
    } catch (e) {
    }
}