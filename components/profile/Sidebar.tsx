import Image from "next/image";

export default function Sidebar(){
    return (
        <div className="w-64 p-4 bg-white shadow-md rounded-[12px] ">
            <nav>
                <ul className="flex flex-col gap-4">
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/profile.svg'} alt={'Профиль'} width={24} height={24}/>
                        <a href="#">Иван Иванович</a>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/orders.svg'} alt={'Мои заказы'} width={18} height={18}/>
                        <a href="#">Мои заказы</a>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/favorite.svg'} alt={'Мое избранное'} width={30} height={30}/>
                        <a href="#">Мое избранное</a>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/history.svg'} alt={'История заказов'} width={30} height={30}/>
                        <a href="#">История заказов</a>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/support.svg'} alt={'Служба поддержки'} width={24} height={24}/>
                        <a href="#">Служба поддержки</a>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/faq.svg'} alt={'Вопросы и ответы'} width={24} height={24}/>
                        <a href="#">Вопросы и ответы</a>
                    </li>
                    <li className="text-red-700 border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/close.svg'} alt={'Выход'} width={24} height={24}/>
                        <a href="#">Выход</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}