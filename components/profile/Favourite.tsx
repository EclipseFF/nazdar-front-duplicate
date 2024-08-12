'use client'
import {redirect} from "next/navigation";
import Image from "next/image";

export default function Profile(){
    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Мои закладки</h2>
            <div
                className="w-[210px] h-[390px] border-2 border-[#F3F3F3] rounded-[40px] grid justify-items-center pt-4 ">
                <Image
                    src={"/temp/flowerItem.png"}
                    alt="Букет"
                    width={175} height={200}
                />
                <div>
                    <h3 className="font-semibold text-lg">Букет</h3>
                    <p className="text-gray-600">Цена: 12 999 тг.</p>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-pink-500 text-white px-3 rounded">Заказать</button>
                </div>
            </div>
        </div>
    )
}