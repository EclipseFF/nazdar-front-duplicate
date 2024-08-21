'use server';
import { apiUrl } from "@/lib/api";
import {User} from "@/lib/models";

export default async function UpdateUser(user: { id: number, phone: string, name: string }): Promise<User> {
    try {
        const response = await fetch(`${apiUrl}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user.id,
                phone: user.phone,
                name: user.name
            })
        });

        if (!response.ok) {
            return {} as User
        }

        const json = await response.json();

        const res: User = {
            id: json.id,
            phoneNumber: json.phone,
            name: json.name
        }

        return res
    } catch (e) {
        return {} as User
    }
}