'use server'

import {apiUrl} from "@/lib/api";

export default async function DeleteItem(id: number) {
    try {
        await fetch(apiUrl + `/item/delete/${id}`, {
            method: "DELETE",
        });
    } catch (e) {
    }
}