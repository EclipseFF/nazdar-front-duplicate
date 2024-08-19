import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Category} from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";
import CartItem from "@/components/cart/CartItem";
import DeleteCategory from "@/actions/categories/delete-category";
import CreateCategory from "@/actions/categories/create-category";
import {useRouter} from "next/navigation";

export default function Categories(){
    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        GetAllCategories().then((categories) => setCategories(categories))
    },[])
    const router = useRouter()
    return (
    <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-4">
                <button className="bg-gray-100 p-2 rounded-lg">Фильтры</button>
                <Link href={'/admin/create-category'}>
                    <button className="bg-pink-500 text-white p-2 rounded-lg">Добавить</button>
                </Link>
                <Link href={'/admin/create-category'}>
                    <button className="bg-pink-100 text-pink-500 p-2 rounded-lg">Создать категорию</button>
                </Link>
                <div className="p-2">Выбрана 1 строка</div>
            </div>
            <input
                type="text"
                placeholder="Поиск"
                className="bg-gray-100 p-2 rounded-lg"
            />
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                <tr>
                    <th className="p-2 text-left">Название категории</th>
                    <th className="p-2 text-left">Количество продуктов в категории</th>
                    <th className="p-2 text-left"></th>
                </tr>
                {categories.map((category) => (
                    <tr key={category.id} className="border-b">
                        <td className="p-2">{category.name}</td>
                        <td className="p-2">55</td>
                        <td className="p-2 flex space-x-2">
                            <Link href={`/admin/edit-category/${category.id}`}>
                                <button className="text-blue-500">Edit</button>
                            </Link>
                            <button onClick={() => DeleteCategory(category).then(router.refresh)} className="text-red-500">Delete</button>
                        </td>
                    </tr>
                ))}
                </thead>
            </table>
        </div>
        <div className="flex justify-between mt-4">
            <button className="bg-gray-100 p-2 rounded-lg">Назад</button>
            <div>Page 1 of 10</div>
            <button className="bg-gray-100 p-2 rounded-lg">Вперед</button>
        </div>
    </div>
)
}