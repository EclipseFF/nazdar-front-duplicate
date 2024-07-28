'use client'
import Image from "next/image";
import { useState } from "react";
import Cart from "@/components/cart/Cart";


export default function Header() {
    const [isCartVisible, setIsCartVisible] = useState(false);
    //const router = useRouter();
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);

        // const promoSlider = document.getElementById("promo-slider");
        // if(promoSlider) {
        //     if (isCartVisible){
        //         promoSlider.style.opacity="1"
        //     } else if (!isCartVisible){
        //         promoSlider.style.opacity="0.5"
        //     }
        // }
        // if (isCartVisible) {
        //    document.getElementById("promo-slider").style.opacity="1";
        // } else {
        //    document.getElementById("promo-slider").style.opacity="0.5";
        // }
    };

    return (
        <div className="flex justify-between h-32 bg-white rounded-t-[20px] border-b border-b-[#EAEAEA]">
            <div className="flex gap-4 pl-11">
                <Image src={'/logo.svg'} alt={'Логотип'} width={40} height={40} />
                <Image src={'/text_logo.svg'} alt={'Логотип'} width={140} height={40} />
            </div>
            <div className="flex items-center gap-8 pr-11">
                <div onClick={toggleCart} className="flex gap-2 cursor-pointer">
                    <Image src={'/icons/cart.svg'} alt={'Корзина'} width={18} height={17} />
                    <p>10 512 тг.</p>
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <Image src={'/icons/favs.svg'} alt={'Избранное'} width={18} height={17} />
                    <p>Избранное</p>
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <Image src={'/icons/profile.svg'} alt={'Профиль'} width={18} height={17} />
                    <p>Профиль</p>
                </div>
            </div>
                <Cart isCartVisible={isCartVisible} toggleCart={toggleCart} />
        </div>
    );
}