"use server"

import { apiUrl } from "@/lib/api";
import { User } from "@/lib/models";

export async function GetUserByToken(token: string): Promise<User> {
    try {
        const response = await fetch(`${apiUrl}/user/token/` + token, {
            method: "GET",
        });


        const json = await response.json();

        const user: User = {
            id: json.id,
            phoneNumber: json.phone,
            name: json.name,
        };
        return user;
    } catch (e) {
        return {} as User;
    }
}