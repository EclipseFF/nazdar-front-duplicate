'use client'
import {redirect} from "next/navigation";

export default function UserInfo(){
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Профиль</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold">Имя:</label>
                    <p className="text-gray-900">Иван Иванович</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Email:</label>
                    <p className="text-gray-900">ivan.ivanovich@example.com</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Телефон:</label>
                    <p className="text-gray-900">+7 (999) 123-45-67</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Адрес:</label>
                    <p className="text-gray-900">г. Москва, ул. Примерная, д. 1</p>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Дата регистрации:</label>
                    <p className="text-gray-900">01.01.2020</p>
                </div>
            </div>
            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">Редактировать профиль</button>
        </div>
    )
}