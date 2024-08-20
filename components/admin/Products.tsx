'use client'
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Item } from "@/lib/models";
import GetAllItems from "@/actions/items/get-all";
import {apiUrl} from "@/lib/api";
import Image from "next/image";
import DeleteItem from "@/actions/items/delete";

export default function Products() {
    const [items, setItems] = useState<Item[]>([]);
    const router = useRouter();
    useEffect(() => {
        GetAllItems(100, 0).then((items) => setItems(items));
    }, []);

    function handleDeleteItem(id: number) {
        DeleteItem(id).then(() => location.reload());
    }


    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                    <button className="bg-gray-100 p-2 rounded-lg">Фильтры</button>
                    <Link href={'/admin/create-item'}>
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
                        <th className="p-2 text-left">Продукт</th>
                        <th className="p-2 text-left">Категории</th>
                        <th className="p-2 text-left">Цена</th>
                        <th className="p-2 text-left">Количество заказов</th>
                        <th className="p-2 text-left">Дата создания</th>
                        <th className="p-2 text-left">Изображения</th>
                        <th className="p-2 text-left"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-2">{item.name}</td>
                            <td className="p-2">{item.categories ? item.categories.map((category) => (category.name + ' ')) : 'Нет категории' }</td>
                            <td className="p-2">{item.price}</td>
                            <td className="p-2">21</td>
                            <td className="p-2">17.05.2024</td>
                            <td className="p-2">
                                {item.images && item.images.map(() => (
                                    <Image key={item.id} src={apiUrl + "/images/" + item.id + "/" + item.images[0]} alt={'Товар'} width={50} height={75} className="rounded-[30px]" />
                                ))}
                            </td>
                            <td className="p-2 flex space-x-2">
                                <Link href={`/admin/edit-item/${item.id}`}>
                                    <button className="text-blue-500">Edit</button>
                                </Link>
                                <button className="text-red-500" onClick={() => {handleDeleteItem(item.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <button className="bg-gray-100 p-2 rounded-lg">Назад</button>
                <div>Page 1 of 10</div>
                <button className="bg-gray-100 p-2 rounded-lg">Вперед</button>
            </div>
        </div>
    );
}