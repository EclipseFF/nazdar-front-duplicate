'use server'

import {apiUrl} from "@/lib/api";
import {cookies} from "next/headers";

export default async function Login(name: string, password: string): Promise<boolean> {
    try {
        const response = await fetch(apiUrl + '/session/admin/login', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({name, password})
        });
        const json = await response.json();
        const Session ={
            adminId: json.adminId,
            token: json.token
        }
        if (Session.token) {
            cookies().set("adtoken", Session.token, {expires: Date.now() + 60 * 60 * 24 * 1000*30, httpOnly: true})

            return true
        }
        return false
    } catch (e) {

        return false
    }
}