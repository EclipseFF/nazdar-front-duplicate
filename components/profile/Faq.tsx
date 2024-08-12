'use client'
import {redirect} from "next/navigation";

export default function Profile(){
    return (
        <div className="p-6 bg-white shadow-md">
            <h2 className="text-xl font-bold mb-4">Вопросы и ответы</h2>
            <ul className="space-y-4">
                <li>
                    <h3 className="font-semibold">Как сделать заказ?</h3>
                    <p className="text-gray-700">Ответ на этот вопрос...</p>
                </li>
                <li>
                    <h3 className="font-semibold">Как оплатить?</h3>
                    <p className="text-gray-700">Ответ на этот вопрос...</p>
                </li>
                <li>
                    <h3 className="font-semibold">Как связаться с поддержкой?</h3>
                    <p className="text-gray-700">Хуй его знает честно говоря</p>
                </li>
            </ul>
        </div>
    )
}