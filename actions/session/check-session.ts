'use server'

import {apiUrl} from "@/lib/api";

export default async function CheckSession(token: string) {
    try {

        const response = await fetch(apiUrl + '/session/admin/check', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({token}),
        });
        const json = await response.json();
        return !!json.token;

    } catch (e) {

        return false
    }
}