"use server"

import {apiUrl} from "@/lib/api";
import {User} from "@/lib/models";

export async function GetUserById(userId: number): Promise<User | null> {
    try {
        const response = await fetch(`${apiUrl}/user/${userId}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const json = await response.json();

        const user: User = {
            id: json.user.id,
            phoneNumber: json.user.phoneNumber,
            name: json.user.name,
        };

        return user;
    } catch (e) {
        console.error('Error fetching user data:', e);
        return null;
    }
}