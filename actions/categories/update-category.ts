import {apiUrl} from "@/lib/api";

export default async function UpdateCategory(category: { id: number, name: string }) {
    const response = await fetch(apiUrl + "/category/" + category.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category),
    });

    if (!response.ok) {
        throw new Error('Failed to update category');
    }

    return await response.json();
}