'use client'

import {useState} from "react";
import {apiUrl} from "@/lib/api";
import {useRouter} from "next/navigation";
import Image from "next/image";
import CreateCategory from "@/actions/categories/create-category";

export default function CreateCategoryForm(){
    const router = useRouter()

    const [name, setName] = useState<string>("")

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Создание новой категории</h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Введите название
                </label>
                <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
            <button
                onClick={() => CreateCategory({id: 0, name: name}).then(() =>router.push('/admin'))}
                className="w-full bg-primary_purple text-white py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
                Создать
            </button>
        </div>
    )
}