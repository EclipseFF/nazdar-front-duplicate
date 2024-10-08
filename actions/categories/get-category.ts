'use server'

import {apiUrl} from "@/lib/api";

export default async function GetCategoryById(id: number){
    try {
        const response = await fetch(apiUrl + `/category/${id}`);
        const json = await response.json();
        return json
    } catch (e) {
        return "Error"
    }
}