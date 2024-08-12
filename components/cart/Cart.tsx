'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"
import CartItem from "@/components/cart/CartItem";
import {CartItemModel} from "@/lib/models";
import GetCartItems from "@/actions/items/def";

interface CartProps {
    isCartVisible: boolean;
    toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isCartVisible, toggleCart }, props:CartItemModel) => {
    const [cartitems, setCartItems] = useState<CartItemModel[]>([])

    useEffect(() => {
        GetCartItems().then((cartitems) => setCartItems(cartitems))
    }, [])

    const totalPrice = cartitems.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0);

    if (!isCartVisible) return null;

    return (
        <div className="fixed z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleCart} />
            <div className="fixed right-0 top-0 w-80 h-full bg-white p-4 shadow-lg z-10 flex flex-col">
                <div className="flex justify-between mb-4">
                    <h2 className="text-bold text-2xl">
                        Корзина
                    </h2>
                    <Image onClick={toggleCart} src={'/icons/close.svg'} alt={'Закрыть'} width={32} height={32}/>
                </div>
                <ScrollArea className="flex flex-col space-y-5 p-2">
                    <div className="grid grid-cols-1 gap-4">
                        {cartitems.map((cartitems) => (
                            <CartItem key={cartitems.id} id={cartitems.id} name={cartitems.name} quantity={cartitems.quantity} price={cartitems.price} image={cartitems.image}/>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t mt-auto">
                    <p className="text-lg font-semibold">
                        Итого: {totalPrice.toLocaleString()} тг.
                    </p>
                    <button className="w-full mt-4 bg-primary_purple text-white p-2 rounded-lg">
                        Заказ в 1 клик
                    </button>
                </div>
            </div>
        </div>
    )
    }

export default Cart