import Image from "next/image";

interface SidebarProps{
    setActiveSection: (section: string) => void
}

export default function Sidebar({setActiveSection}: SidebarProps) {
    return (
        <div className="w-64 p-4 bg-white shadow-lg rounded-[12px] ">
            <nav>
                <ul className="flex flex-col gap-4">
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/profile.svg'} alt={'Профиль'} width={24} height={24}/>
                        <button onClick={() => setActiveSection('profile')}>Иван Иванович</button>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/orders.svg'} alt={'Мои заказы'} width={18} height={18}/>
                        <button onClick={() => setActiveSection('orders')}>Мои заказы</button>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/favorite.svg'} alt={'Мое избранное'} width={30} height={30}/>
                        <button onClick={() => setActiveSection('favs')}>Мое избранное</button>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/history.svg'} alt={'История заказов'} width={30} height={30}/>
                        <button onClick={() => setActiveSection('history')}>История заказов</button>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/support.svg'} alt={'Служба поддержки'} width={24} height={24}/>
                        <button onClick={() => setActiveSection('support')}>Служба поддержки</button>
                    </li>
                    <li className="border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/faq.svg'} alt={'Вопросы и ответы'} width={24} height={24}/>
                        <button onClick={() => setActiveSection('faq')}>Вопросы и ответы</button>
                    </li>
                    <li className="text-red-700 border-b-2 flex items-center gap-2 pb-4">
                        <Image src={'/icons/close.svg'} alt={'Выход'} width={24} height={24}/>
                        <button>Выход</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}