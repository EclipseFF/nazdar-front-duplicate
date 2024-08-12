'use server'

import {cookies} from "next/headers";
import {apiUrl} from "@/lib/api";

export default async function Logout(){
    const token = cookies().get("token")

    cookies().delete("token")
    const response = await fetch(apiUrl + '/session', {
        method: "DELETE",
        body: JSON.stringify(token),
    });
}