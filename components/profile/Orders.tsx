'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { GetOrdersByToken } from "@/actions/users/get-orders-by-token";
import {CartItemModel, Order} from "@/lib/models";
import {apiUrl} from "@/lib/api";

export default function Orders({token}: {token: string}) {
    const [orders, setOrders] = useState<CartItemModel[]>([]);

    useEffect(() => {
        GetOrdersByToken(token).then((resp) => (
            setOrders(resp)
        ))
    }, []);

    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">История заказов</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-40">
                {orders.map(order => (
                    <div
                        key={order.id}
                        className="w-[210px] h-[390px] border-2 border-[#F3F3F3] rounded-[40px] grid justify-items-center pt-4"
                    >
                        <Image
                            src={apiUrl + "/images/" + order.id + "/" + order.image}
                            alt={order.name}
                            width={175}
                            height={200}
                        />
                        <div>
                            <h3 className="font-semibold text-lg">{order.name}</h3>
                            <p className="text-gray-600">Цена: {order.price}</p>
                            <p className="text-gray-600">Количество: {order.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}