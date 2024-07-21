import {useState} from "react";
import Image from "next/image";

export default function Cart(){
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleCart}>
            </div>
            <div className="fixed right-0 top-0 w-80 h-full bg-white p-4 shadow-lg z-10">
                <div className="flex justify-between mb-4 flex-grow overflow-y-auto">
                    <h2 className="text-bold text-2xl">
                        Корзина
                    </h2>
                    <Image onClick={toggleCart} src={'/icons/close.svg'} alt={'Закрыть'} width={32} height={32}/>
                </div>
                <div className="space-y-4">
                    <div className="border-2 border-[#F3F3F3] rounded-[20px] p-4 flex items-center justify-between ">
                        <div className=" flex items-center gap-2">
                            <Image src={'/temp/flowerItem.png'} alt={'Flower 1'} width={80} height={80}/>
                            <div>
                                <p>Букет 1шт.</p>
                                <p>12 999 тг.</p>
                            </div>
                        </div>
                        <Image onClick={toggleCart} src={'/icons/close.svg'} alt={'Закрыть'} width={32} height={32}/>
                    </div>
                    <div className="border-2 border-[#F3F3F3] rounded-[20px] p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Image src={'/temp/flowerItem.png'} alt={'Flower 1'} width={80} height={80}/>
                            <div>
                                <p>Букет 1шт.</p>
                                <p>12 999 тг.</p>
                            </div>
                        </div>
                        <Image onClick={toggleCart} src={'/icons/close.svg'} alt={'Закрыть'} width={32} height={32}/>
                    </div>
                </div>
                <div className="p-4 border-t mt-auto">
                    <p className="text-lg font-semibold">
                        Итого: 25 998 тг.
                    </p>
                    <button className="w-full mt-4 bg-primary_purple text-white p-2 rounded-lg">
                        Заказ в 1 клик
                    </button>
                </div>
            </div>
        </div>

    )
}