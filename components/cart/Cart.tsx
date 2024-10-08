'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItem from "@/components/cart/CartItem";
import {CartItemModel, User} from "@/lib/models";

import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import GetCartItems from "@/actions/cart/get-cart-items";
import Checkout from "@/actions/cart/checkout";
import {GetUserByToken} from "@/actions/users/get-user-by-id";

interface CartProps {
    isCartVisible: boolean;
    toggleCart: () => void;
    token?: string;
}

const Cart: React.FC<CartProps> = ({ isCartVisible, toggleCart, token }, props: CartItemModel) => {
    const [cartItems, setCartItems] = useState<CartItemModel[]>([]);
    const [isClosing, setIsClosing] = useState(false); // State for triggering the closing animation
    const [user, setUser] = useState<User>({} as User)
    useEffect(() => {
        GetCartItems(token).then((cartItems) => setCartItems(cartItems));
        GetUserByToken(token || "").then((user) => setUser(user));
    }, [token]);

    function totalPrice() {
        return cartItems.reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0);
    }

    // Handlers for swipe actions (Mobile)
    const handlers: SwipeableHandlers = useSwipeable({
        onSwipedDown: () => handleClose(), // Trigger the closing animation on swipe down
        trackMouse: true, // Enable mouse events as well (optional)
        trackTouch: true, // Enable touch events
    });

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            toggleCart();
        }, 300);
    };

    if (!isCartVisible && !isClosing) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center md:justify-end">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClose} />

            <div
                {...handlers}
                className={`fixed bottom-0 w-full max-w-md h-3/4 bg-white p-4 shadow-lg rounded-t-lg md:hidden flex flex-col transform transition-transform duration-300 ${
                    isClosing ? "translate-y-full" : "translate-y-0"
                }`}
            >
                <div className="flex justify-between mb-4">
                    <h2 className="text-bold text-2xl">
                        Корзина
                    </h2>
                    <Image onClick={handleClose} src={'/icons/close.svg'} alt={'Закрыть'} width={32} height={32} />
                </div>
                <ScrollArea className="flex flex-col space-y-5 p-2">
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems.map((cartitem) => (
                            <CartItem key={cartitem.id} props={cartitem} token={token}/>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t mt-auto">
                    <p className="text-lg font-semibold">
                        {cartItems && cartItems.length > 0 ? "Итого: " + totalPrice().toLocaleString() + " тг." : "Корзина пуста"}
                    </p>
                    <button className="w-full mt-4 bg-primary_purple text-white p-2 rounded-lg" onClick={() =>
                        Checkout(cartItems, token).then(() =>
                            location.href = "https://wa.me/+77025059900?text=Здравствуйте,%20пишу%20насчет%20заказа%20на%20имя%20" + user.name + ".")}>
                        Заказ в 1 клик
                    </button>
                </div>
            </div>

            
            <div
                className={`hidden md:flex fixed right-0 top-0 w-80 h-full bg-white p-4 shadow-lg z-10 flex-col transform transition-transform duration-300 ${
                    isClosing ? "translate-x-full" : "translate-x-0"
                }`}
            >
                <div className="flex justify-between mb-4">
                    <h2 className="text-bold text-2xl">
                        Корзина
                    </h2>
                    <Image onClick={handleClose} src={'/icons/close.svg'} alt={'Закрыть'} width={32} height={32} />
                </div>
                <ScrollArea className="flex flex-col space-y-5 p-2">
                    <div className="grid grid-cols-1 gap-4">
                        {cartItems.map((cartitem) => (
                            <CartItem key={cartitem.id} props={cartitem} token={token}/>
                        ))}
                    </div>
                </ScrollArea>
                <div className="p-4 border-t mt-auto">
                    <p className="text-lg font-semibold">
                        {cartItems && cartItems.length > 0 ? "Итого: " + totalPrice().toLocaleString() + " тг." : "Корзина пуста"}
                    </p>
                    <button className="w-full mt-4 bg-primary_purple text-white p-2 rounded-lg" onClick={() =>
                        Checkout(cartItems, token).then(() =>
                            location.href = "https://wa.me/+77025059900?text=Здравствуйте,%20пишу%20насчет%20заказа%20на%20имя%20" + user.name + ".")}>
                        Заказ в 1 клик
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;