import {apiUrl} from "@/lib/api";

export default async function UpdateCategory(category: { id: number, name: string }) {
    const response = await fetch(apiUrl + "/category", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: category.id,
            name: category.name
        })
    });

    if (!response.ok) {
        throw new Error('Failed to update category');
    }

    return await response.json();
}