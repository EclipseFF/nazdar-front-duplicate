'use client'
import {redirect, useRouter} from "next/navigation";
import Link from "next/link";

export default function Products(){
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                    <button className="bg-gray-100 p-2 rounded-lg">Фильтры</button>
                    <Link href={'/admin/create-item'}>
                        <button className="bg-pink-500 text-white p-2 rounded-lg">Добавить</button>
                    </Link>
                    <button className="bg-pink-100 text-pink-500 p-2 rounded-lg">Создать категорию</button>
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
                        <th className="p-2 text-left">Категория</th>
                        <th className="p-2 text-left">Цена</th>
                        <th className="p-2 text-left">Количество заказов</th>
                        <th className="p-2 text-left">Дата создания</th>
                        <th className="p-2 text-left"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b">
                        <td className="p-2">Букет роз</td>
                        <td className="p-2">Букеты</td>
                        <td className="p-2">12 990</td>
                        <td className="p-2">21</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Букет роз</td>
                        <td className="p-2">Букеты</td>
                        <td className="p-2">12 990</td>
                        <td className="p-2">21</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Букет роз</td>
                        <td className="p-2">Букеты</td>
                        <td className="p-2">12 990</td>
                        <td className="p-2">21</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Букет роз</td>
                        <td className="p-2">Букеты</td>
                        <td className="p-2">12 990</td>
                        <td className="p-2">21</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr>

                    <tr className="border-b">
                        <td className="p-2">Плюшевый медведь</td>
                        <td className="p-2">Мягкие игрушки</td>
                        <td className="p-2">18 990</td>
                        <td className="p-2">50</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Плюшевый медведь</td>
                        <td className="p-2">Мягкие игрушки</td>
                        <td className="p-2">18 990</td>
                        <td className="p-2">50</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Плюшевый медведь</td>
                        <td className="p-2">Мягкие игрушки</td>
                        <td className="p-2">18 990</td>
                        <td className="p-2">50</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Плюшевый медведь</td>
                        <td className="p-2">Мягкие игрушки</td>
                        <td className="p-2">18 990</td>
                        <td className="p-2">50</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr><tr className="border-b">
                        <td className="p-2">Плюшевый медведь</td>
                        <td className="p-2">Мягкие игрушки</td>
                        <td className="p-2">18 990</td>
                        <td className="p-2">50</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr>
                    </tbody>
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