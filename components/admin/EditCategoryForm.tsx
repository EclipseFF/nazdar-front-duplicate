'use client'

import {useState, useEffect} from "react";
import {apiUrl} from "@/lib/api";
import {useRouter} from "next/navigation";
import UpdateCategory from "@/actions/categories/update-category";  // Assume you have an update action

interface EditCategoryFormProps {
    category: { id: number, name: string };
}

export default function EditCategoryForm({ category }: EditCategoryFormProps) {
    const router = useRouter();

    const [name, setName] = useState<string>(category.name);

    const handleUpdate = () => {
        UpdateCategory({ id: category.id, name: name })
            .then(() => router.push('/admin'));
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Редактирование категории</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Введите название
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <button
                onClick={handleUpdate}
                className="w-full bg-primary_purple text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
                Обновить
            </button>
        </div>
    );
}