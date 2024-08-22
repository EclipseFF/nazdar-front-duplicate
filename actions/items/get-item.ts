'use server'

import {apiUrl} from "@/lib/api";

export default async function GetItemById(id: number){
    try {
        const response = await fetch(apiUrl + `/item/${id}`);
        if (!response.ok) {
            console.error("Failed to fetch the item:", response.status);
            return null;
        }
        const json = await response.json();
        console.log("API response:", json);
        return json;
    } catch (e) {
        console.error("Error fetching item:", e);
        return null;
    }
}