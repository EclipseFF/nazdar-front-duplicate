'use client'
import {redirect, useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import {Category, User} from "@/lib/models";
import GetAllCategories from "@/actions/categories/get-all-categories";
import DeleteCategory from "@/actions/categories/delete-category";
import GetAllUsers from "@/actions/users/get-all-users";

export default function Users(){
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        GetAllUsers(100, 0).then((users) => setUsers(users))
    },[])
    const router = useRouter()
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <button className="bg-gray-100 p-2 rounded-lg">Фильтры</button>
                    <button className="bg-pink-500 text-white p-2 rounded-lg">Добавить</button>
                    <div className="p-2">Выбрана 1 строка</div>
                </div>
                <input
                    type="text"
                    placeholder="Поиск"
                    className="bg-gray-100 p-2 rounded-lg"
                />
            </div>
            <div className="mt-4">
                <table className="min-w-full bg-white">
                    <thead>
                    <tr>
                        <th className="p-2">Номер телефона</th>
                        <th className="p-2">Имя</th>
                        <th className="p-2">Фамилия</th>
                        <th className="p-2">Отчество</th>
                        <th className="p-2">Количество заказов</th>
                        <th className="p-2">Дата регистрации</th>
                        <th className="p-2"></th>
                    </tr>
                    </thead>
                    <tbody className="">
                    {users.map((user) => (
                        <tr key={user.id} className="border-b">
                            <td className="p-2">{user.phoneNumber}</td>
                            <td className="p-2">{user.surname}</td>
                            <td className="p-2">{user.name}</td>
                            <td className="p-2">{user.patronymic}</td>
                            <td className="p-2">55</td>
                            <td className="p-2">11.09.2011</td>
                            <td className="p-2 flex space-x-2">
                                <button className="text-blue-500">Edit</button>
                                <button className="text-red-500">Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr className="border-b">
                        <td className="p-2">John Doe</td>
                        <td className="p-2">+77077777777</td>
                        <td className="p-2">5</td>
                        <td className="p-2">17.05.2024</td>
                        <td className="p-2 flex space-x-2">
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button className="bg-gray-100 p-2 rounded-lg">Назад</button>
                    <div>Page 1 of 10</div>
                    <button className="bg-gray-100 p-2 rounded-lg">Вперед</button>
                </div>
            </div>
        </div>
    )
}