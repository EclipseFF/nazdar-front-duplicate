'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { GetOrdersByUserId } from "@/actions/users/get-orders-by-user-id";
import { Order } from "@/lib/models";

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const userId = 1;
            const fetchedOrders = await GetOrdersByUserId(userId);
            setOrders(fetchedOrders);
        };

        fetchOrders();
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
                            src={order.imageUrl}
                            alt={order.itemName}
                            width={175}
                            height={200}
                        />
                        <div>
                            <h3 className="font-semibold text-lg">{order.itemName}</h3>
                            <p className="text-gray-600">Цена: {order.price}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-pink-500 text-white px-2 rounded mb-1">Заказать</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}