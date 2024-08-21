"use server"

import { apiUrl } from "@/lib/api";
import { User } from "@/lib/models";
import { cookies } from "next/headers"; // To fetch token from cookies in server-side

export async function GetUserByToken(): Promise<User | null> {
    try {
        const token = cookies().get('token')?.value;

        if (!token) {
            throw new Error('No token found in cookies');
        }


        const response = await fetch(`${apiUrl}/user/me`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
            },
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