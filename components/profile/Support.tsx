'use client'
import {redirect} from "next/navigation";

export default function Profile(){
    return (
        <div className="p-6 bg-white shadow-md">
            <h2 className="text-xl font-bold mb-4">Служба поддержки</h2>
            <p className="text-gray-700 mb-4">
                Если у вас возникли вопросы или проблемы, свяжитесь с нашей службой поддержки.
            </p>
            <div className="flex space-x-2">
                <button className="bg-pink-500 text-white px-4 py-2 rounded">Написать сообщение</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Часто задаваемые вопросы</button>
            </div>
        </div>
    )
}