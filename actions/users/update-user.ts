import { apiUrl } from "@/lib/api";

export default async function UpdateUser(user: { id: number, phone: string, name: string }) {
    const response = await fetch(`${apiUrl}/user/${user.id}`, {
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
        throw new Error('Failed to update user');
    }

    return await response.json();
}