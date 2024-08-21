'use client'
import {redirect} from "next/navigation";
import Link from "next/link";

export default function Profile(){
    return (
        <div className="p-6 bg-white">
            <h2 className="text-xl font-bold mb-4">Служба поддержки</h2>
            <p className="text-gray-700 mb-4">
                Если у вас возникли вопросы или проблемы, свяжитесь с нами.
            </p>
            <div className="flex space-x-2">
                <button
                    onClick={() => location.href = "https://wa.me/+77025059900?text=Здравствуйте,%20хочу%20обратиться%20в%20службу%20поддержки."}
                    className="bg-primary_purple text-white px-4 py-2 rounded shadow-lg focus:outline-none"
                >Написать в WhatsApp</button>
                <Link  href={'/profile#orders'} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Частые вопросы</Link>
            </div>
        </div>
    )
}