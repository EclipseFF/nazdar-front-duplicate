'use server'

import {apiUrl} from "@/lib/api";

export default async function GetItemById(id: number){
    try {
        const response = await fetch(apiUrl + `/test/${id}`);
        const json = await response.json();
        return json
    } catch (e) {
        return "Error"
    }
}